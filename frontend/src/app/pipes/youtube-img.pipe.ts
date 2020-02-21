import { Pipe, PipeTransform } from '@angular/core';
import { getYoutubeId } from '../helpers/get-youtube-id';

@Pipe({
  name: 'youtubeImg'
})
export class YoutubeImgPipe implements PipeTransform {



  transform(value: string, args: string): unknown {

    const youtubeId = getYoutubeId(value);

    if (!youtubeId)
      return 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_YouTube_image1600w.jpg';

    if (!args)
      args = 'mq';

    return `https://img.youtube.com/vi/${youtubeId}/${args}default.jpg`

  }




}
