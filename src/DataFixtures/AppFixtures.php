<?php

namespace App\DataFixtures;

use DateTime;
use App\Entity\MicroPost;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $microPost1 = new MicroPost();
        $microPost1->setTitle('My First MicroPost !');
        $microPost1->setText('hey, welcome to my chanel');
        $microPost1->setCreated( new DateTime());
        $manager->persist($microPost1);

        $microPost2 = new MicroPost();
        $microPost2->setTitle('Second title');
        $microPost2->setText('Our second');
        $microPost2->setCreated( new DateTime());
        $manager->persist($microPost2);

        $microPost3 = new MicroPost();
        $microPost3->setTitle('Third one');
        $microPost3->setText('3 is good right ?');
        $microPost3->setCreated( new DateTime());
        $manager->persist($microPost3);
        
        $manager->flush();
    }
}
