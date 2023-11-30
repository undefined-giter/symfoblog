<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\UserProfile;
use App\Form\UserProfileType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class SettingsProfileController extends AbstractController
{
    private EntityManagerInterface $manager;

    public function __construct(EntityManagerInterface $manager)
    {
        $this->manager = $manager;
    }

    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/settings/profile', name: 'settings_profile')]
    public function profile(Request $request): Response {
        /** @var User $user */
        $user = $this->getUser();
        $userProfile = $user->getUserProfile() ?? new UserProfile();

        $form = $this->createForm(
            UserProfileType::class,
            $userProfile
        );
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $userProfile = $form->getData();
            $user->setUserProfile($userProfile);
            $this->manager->persist($user);
            $this->manager->flush();

            $this->addFlash(
                'success',
                'Your settings has been saved'
            );

            return $this->redirectToRoute(
                'settings_profile'
            );
        }

        return $this->render('settings_profile/profile.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
