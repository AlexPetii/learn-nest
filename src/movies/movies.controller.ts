import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Render,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  @Render('movies-list')
  async getMoviesList() {
    const movies = await this.moviesService.findAll();
    return { movies };
  }

  @Get()
  findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Movie | null> {
    return this.moviesService.findOne(+id);
  }
  @Post()
  create(@Body() movie: Movie): Promise<Movie> {
    return this.moviesService.create(movie);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() movie: Movie): Promise<Movie | null> {
    return this.moviesService.update(+id, movie);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.moviesService.remove(Number(id));
  }
}
