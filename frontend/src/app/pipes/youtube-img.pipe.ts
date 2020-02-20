import { Pipe, PipeTransform } from '@angular/core';
import { getYoutubeId } from '../helpers/get-youtube-id';

@Pipe({
  name: 'youtubeImg'
})
export class YoutubeImgPipe implements PipeTransform {



  transform(value: string, args: string): unknown {

    const youtubeId = getYoutubeId(value);

    if (!youtubeId)
      return 'https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwin0PT9mOHnAhXXLLkGHfRSDSwQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.pinclipart.com%2Fpindetail%2FihbbhJR_free-download-mlp-projector-vector-clipart-movie-projector%2F&psig=AOvVaw0Pndp4zia5mtkL4mrWqgw2&ust=1582324680100003';

    if (!args)
      args = 'mq';

    return `https://img.youtube.com/vi/${youtubeId}/${args}default.jpg`

  }




}
