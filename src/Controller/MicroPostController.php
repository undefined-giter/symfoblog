<?php

namespace App\Controller;

use App\Entity\MicroPost;
use App\Form\MicroPostType;
use App\Repository\MicroPostRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class MicroPostController extends AbstractController
{

    #[Route('/micro_post', name: 'micro_post_all')]
    public function index(MicroPostRepository $posts, EntityManagerInterface $manager): Response
    {
        return $this->render('micro_post/index.html.twig', [
            'posts' => $posts->findAll(),
            'displayed_text_caracters' => 25,            
        ]);
    }


    #[Route('/micro_post/add', name: 'micro_post_add', priority: 2)]
    public function add(Request $request, EntityManagerInterface $manager): Response
    {
        $microPost = new MicroPost();
        $form = $this->createForm(MicroPostType::class, new MicroPost());

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $post = $form->getData();
            $post->setCreated(new \DateTime());

            $manager->persist($post);
            $manager->flush();

            $this->addFlash('success','Your post has been added');

            return $this->redirectToRoute('micro_post_all');
        }

        return $this->render('micro_post/add.html.twig', [
            'form' => $form,
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

            return $this->redirectToRoute('micro_post_all');
        }

        return $this->render('micro_post/add.html.twig', [
            'form' => $form,
            'update' => 'Edit Post',
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
}
