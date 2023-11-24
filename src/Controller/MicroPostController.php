<?php

namespace App\Controller;

use App\Entity\Comment;
use App\Entity\MicroPost;
use App\Form\CommentType;
use App\Form\MicroPostType;
use App\Security\Voter\MicroPostVoter;
use App\Repository\MicroPostRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MicroPostController extends AbstractController
{
    private \DateTime $currentTime;

    public function __construct()
    {
        $this->currentTime = new \DateTime('now', new \DateTimeZone('Europe/Paris'));
    }


    #[Route('/micro_post', name: 'micro_post_all')]
    public function index(MicroPostRepository $posts): Response
    {
        return $this->render('micro_post/index.html.twig', [
            'posts' => $posts->findAll(),
            'displayed_text_characters' => 25
        ]);
    }


    #[Route('/micro_post/recents', name: 'micro_post_recents')]
    public function recents(MicroPostRepository $posts, $posts_to_fetch = 15): Response
    {
        return $this->render('micro_post/index.html.twig', [
            'posts' => $posts->findLatestPosts($posts_to_fetch),
            'displayed_text_characters' => 503,
            'recents' => true,
            'max_comments_displayed' => 3,
            'max_comments_length_displayed' => 80,
            'currentTime' => $this->currentTime
        ]);
    }


    #[IsGranted('ROLE_WRITER')]
    #[Route('/micro_post/add', name: 'micro_post_add', priority: 2)]
    public function add(Request $request, EntityManagerInterface $manager): Response
    {
        $form = $this->createForm(MicroPostType::class, new MicroPost());

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $post = $form->getData();
            $post->setCreated(new \DateTime());
            $post->setAuthor($this->getUser());
            $manager->persist($post);
            $manager->flush();

            $this->addFlash('success','Your post has been added');

            return $this->redirectToRoute('micro_post_recents');
        }

        return $this->render('micro_post/add.html.twig', [
            'form' => $form
        ]);
    }


    #[IsGranted(MicroPostVoter::EDIT, subject: 'post')]
    #[Route('/micro_post/{post}/edit', name: 'micro_post_edit')]
    public function edit(MicroPost $post, Request $request, EntityManagerInterface $manager): Response
    {
        $form = $this->createForm(MicroPostType::class, $post);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $post = $form->getData();

            $manager->persist($post);
            $manager->flush();

            $this->addFlash('success','Your post has been updated');

            return $this->redirectToRoute('micro_post_recents');
        }

        return $this->render('micro_post/add.html.twig', [
            'form' => $form,
            'update' => 'Edit Post',
            'post' => $post
        ]);
    }


    #[IsGranted(MicroPostVoter::VIEW, subject: 'post')]
    #[Route('/micro_post/{id<\d+>}', name: 'micro_post_show')]
    public function showOne(MicroPost $post): Response
    {
        if (!$post) {
            throw $this->createNotFoundException('Post not found');
        }
        
        // if($this->security->isGranted('ROLE_ADMIN')) {return true};

        return $this->render('micro_post/show.html.twig', [
            'post' => $post,
            'currentTime' => $this->currentTime
        ]);
    }



    #[IsGranted('ROLE_WRITER')]
    #[Route('/micro_post/{id}/comment', name: 'micro_post_comment')]
    public function addComment(MicroPost $post, MicroPostRepository $posts, Request $request, EntityManagerInterface $manager): Response
    {
        $comment = new Comment();
        $comment->setCreatedAt(new \DateTimeImmutable());
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $comment->setPost($post);
            $comment->setAuthor($this->getUser());
            $manager->persist($comment);
            $manager->flush();

            $this->addFlash('success', 'Your comment has been added');

            return $this->redirectToRoute(
                'micro_post_show',
                ['id' => $post->getId()]
            );
        }

        return $this->render('micro_post/show.html.twig', [
            'form' => $form->createView(),
            'post' => $post,
            'comment' => true
        ]);
    }

}
