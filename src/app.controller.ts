import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { MoviesService } from './movies/movies.service';
import { Movie } from './movies/movie.entity';

@Controller()
export class AppController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  @Render('index')
  getRoot() {
    return {};
  }

  @Post('/movies')
  async addMovie(@Body() movieData: Partial<Movie>) {
    await this.movieService.create(movieData as Movie);
    return { message: 'Movie add' };
  }

  @Get('/movies')
  @Render('movies-list')
  async getMoviesList() {
    const movies = await this.movieService.findAll();
    return { movies };
  }
}
