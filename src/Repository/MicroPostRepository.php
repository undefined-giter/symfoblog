<?php

namespace App\Repository;

use App\Entity\MicroPost;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<MicroPost>
 *
 * @method MicroPost|null find($id, $lockMode = null, $lockVersion = null)
 * @method MicroPost|null findOneBy(array $criteria, array $orderBy = null)
 * @method MicroPost[]    findAll()
 * @method MicroPost[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MicroPostRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MicroPost::class);
    }


    public function findAll(): array
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.created', 'DESC')
            ->getQuery()
            ->getResult();
    }


    public function findLatestPostsWithComments(int $limit = 15): array
    {
        return $this->createQueryBuilder('p')
            ->setMaxResults($limit)
            ->orderBy('p.created', 'DESC')
            ->leftJoin('p.comments', 'c')
            ->addSelect('c')
            ->where(
                'p.id IN (
                    SELECT sub.id 
                    FROM App\Entity\MicroPost sub 
                    ORDER BY sub.created DESC
                    )'
            )
            ->getQuery()
            ->getResult();
    }

    
//    /**
//     * @return MicroPost[] Returns an array of MicroPost objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('m.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?MicroPost
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
