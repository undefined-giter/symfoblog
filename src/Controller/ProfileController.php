<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProfileController extends AbstractController
{
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/profile/{id}', name: 'profile')]
    public function show(User $user): Response
    {
        return $this->render('profile/show.html.twig', [
            'user'=> $user
        ]);
    }

    #[Route('/profile/{id}/follows', name: 'profile_follows')]
    public function follows(User $user): Response
    {
        return $this->render('profile/follows.html.twig', [
            'user'=> $user
        ]);
    }

    #[Route('/profile/{id}/followers', name: 'profile_followers')]
    public function followers(User $user): Response
    {
        return $this->render('profile/followers.html.twig', [
            'user'=> $user
        ]);
    }
}
