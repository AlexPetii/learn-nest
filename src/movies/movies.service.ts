import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  findAll(): Promise<Movie[]> {
    return this.moviesRepository.find();
  }

  findOne(id: number): Promise<Movie | null> {
    return this.moviesRepository.findOneBy({ id });
  }

  create(movie: Movie): Promise<Movie> {
    return this.moviesRepository.save(movie);
  }

  async update(id: number, movie: Movie): Promise<Movie | null> {
    await this.moviesRepository.update(id, movie);
    return this.moviesRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.moviesRepository.delete(id);
  }
}
