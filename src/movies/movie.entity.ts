import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  criticRating: number;

  @Column()
  myRating: number;

  @Column({ nullable: true })
  imageUrl: string;
}
