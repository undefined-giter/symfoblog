<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\UserProfile;
use App\Form\UserProfileType;
use App\Form\ProfileImageType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;


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

    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/settings/profile-image', name: 'settings_profile_image')]
    public function profileImage(
        Request $request,
        SluggerInterface $slugger,
        EntityManagerInterface $manager
    ): Response
    {
        $form = $this->createForm(ProfileImageType::class);
        /** @var User $user */
        $user = $this->getUser();

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $profileImageFile = $form->get('profileImage')->getData();

            if($profileImageFile){
                $originalFileName = pathInfo(
                    $profileImageFile->getClientOriginalName(),
                    PATHINFO_FILENAME
                );
                $safeFilename = $slugger->slug($originalFileName);
                $newFileName = $safeFilename . '-' . uniqid() . '.' . $profileImageFile->guessExtension();
            
                try{
                    $profileImageFile->move(
                        $this->getParameter('profile_directory'),
                        $newFileName
                    );
                } catch(FileException $e){
                }

                $profile = $user->getUserProfile() ?? new UserProfile();
                $profile->setImage($newFileName);
                $manager->persist($profile);
                $manager->flush();
                $this->addFlash('success', 'Your profile picture has been updated');
            
                return $this->redirectToRoute('settings_profile_image');
            }
        }

        return $this->render(
            'settings_profile/profile_image.html.twig',
            [
                'form' => $form->createView(),
            ]
            );
    }
}
