<?php

namespace App\DataFixtures;

use DateTime;
use App\Entity\MicroPost;
use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{

    public function __construct(private UserPasswordHasherInterface $userPasswordHasher)
    {

    }

    public function load(ObjectManager $manager): void
    {
        
        $user1 = new User();
        $user1->setEmail('mick@gmail.com');
        $user1->setPassword(
            $this->userPasswordHasher->hashPassword(
                $user1,
                '1234'
            )
        );
        $manager->persist($user1);

        $user2 = new User();
        $user2->setEmail('lena@gmail.com');
        $user2->setPassword(
            $this->userPasswordHasher->hashPassword(
                $user2,
                '1234'
            )
        );
        $manager->persist($user2);
        

        $microPost1 = new MicroPost();
        $microPost1->setTitle('First MicroPost');
        $microPost1->setText('hey, welcome to my chanel');
        $microPost1->setCreated( new DateTime());
        $microPost1->setAuthor($user1);
        $manager->persist($microPost1);

        $microPost2 = new MicroPost();
        $microPost2->setTitle('Second title');
        $microPost2->setText('Our second');
        $microPost2->setCreated( new DateTime());
        $microPost2->setAuthor($user2);
        $manager->persist($microPost2);

        $microPost3 = new MicroPost();
        $microPost3->setTitle('Third one');
        $microPost3->setText('3 is good right ?');
        $microPost3->setCreated( new DateTime());
        $microPost3->setAuthor($user2);
        $manager->persist($microPost3);
        
        $manager->flush();
    }
}
