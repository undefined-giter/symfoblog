<?php

namespace App\Controller;

use App\Entity\MicroPost;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class LikeController extends AbstractController
{
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/like/{id}', name: 'like')]
    public function like(MicroPost $post, EntityManagerInterface $manager, Request $request): Response
    {
        $currentUser = $this->getUser();
        $post->addLikedBy($currentUser);
        $manager->persist($post);
        $manager->flush();

        return $this->redirect($request->headers->get('referer'));
    }

    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/unlike/{id}', name: 'unlike')]
    public function unlike(MicroPost $post, EntityManagerInterface $manager, Request $request): Response
    {
        $currentUser = $this->getUser();
        $post->removeLikedBy($currentUser);
        $manager->persist($post);
        $manager->flush();

        return $this->redirect($request->headers->get('referer'));
    }
}
