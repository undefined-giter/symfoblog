<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class LoginController extends AbstractController
{
    #[Route('/login', name: 'login')]
    public function index(AuthenticationUtils $utils): Response
    {
        $lastUsername = $utils->getLastUsername();
        $error = $utils->getLastAuthenticationError();

        return $this->render('login/index.html.twig', [
            'lastUsername' => $lastUsername,
            'error' => $error,
            
        ]);
    }

    #[Route('/logout', name: 'logout')]
    public function logout()
    {}
}
