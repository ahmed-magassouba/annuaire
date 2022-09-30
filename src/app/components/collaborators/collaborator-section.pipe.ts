import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'collaboratorSection'
})
export class CollaboratorSectionPipe implements PipeTransform {

  transform(section: string): string {
  
    let color: string;
  
    switch (section) {
      case 'Informatique':
        color = 'red';
        break;
      case 'Vente':
        color = 'blue';
        break;
      case 'Comptabilité':
        color = 'green';
        break;
      case 'Maintenance':
        color = 'brown';
        break;
      case 'Direction':
        color = 'orange';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }

}
