<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Comment;
use App\Entity\MicroPost;
use App\Form\CommentType;
use App\Entity\UserProfile;
use App\Form\MicroPostType;
use App\Repository\CommentRepository;
use App\Repository\MicroPostRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\UserProfileRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class MicroPostController extends AbstractController
{

    #[Route('/micro_post', name: 'micro_post_all')]
    public function index(MicroPostRepository $posts): Response
    {
        return $this->render('micro_post/index.html.twig', [
            'posts' => $posts->findAll(),
            'displayed_text_characters' => 25,        
        ]);
    }


    #[Route('/micro_post/recents', name: 'micro_post_recents')]
    public function recents(MicroPostRepository $posts): Response
    {
        return $this->render('micro_post/index.html.twig', [
            'posts' => $posts->findLatestPostsWithComments(),
            'displayed_text_characters' => 503,
            'recents' => true,
            'max_comments_displayed' => 3,
            'max_comments_length_displayed' => 80,
        ]);
    }


    #[Route('/micro_post/add', name: 'micro_post_add', priority: 2)]
    public function add(Request $request, EntityManagerInterface $manager): Response
    {
        $form = $this->createForm(MicroPostType::class, new MicroPost());

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $post = $form->getData();
            $post->setCreated(new \DateTime());

            $manager->persist($post);
            $manager->flush();

            $this->addFlash('success','Your post has been added');

            return $this->redirectToRoute('micro_post_recents');
        }

        return $this->render('micro_post/add.html.twig', [
            'form' => $form
        ]);
    }


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

    
    #[Route('/micro_post/{id<\d+>}', name: 'micro_post_show')]
    public function showOne(int $id, MicroPostRepository $posts): Response
    {
        $post = $posts->find($id);

        if (!$post) {
            throw $this->createNotFoundException('Post not found');
        }

        return $this->render('micro_post/show.html.twig', [
            'post' => $post,
        ]);
    }


    #[Route('/micro_post/{post}/comment', name: 'micro_post_comment')]
    public function addComment(MicroPost $post, Request $request, CommentRepository $comment, EntityManagerInterface $manager): Response
    {
        $form = $this->createForm(CommentType::class, new Comment());

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $comment = $form->getData();
            $comment->setPost($post);

            $manager->persist($comment);
            $manager->flush();

            $this->addFlash('success','Your comment has been added');

            return $this->redirectToRoute(
                'micro_post_show',
                ['id' => $post->getId()]
            );
        }

        return $this->render(
            'micro_post/add.html.twig',
            [
                'form' => $form,
                'post' => $post,
                'comment' => true
            ]
        );
    }
}
