import { ICountry } from 'app/shared/model/country.model';
import { IOrganism } from 'app/shared/model/organism.model';
import { IStudyVersion } from 'app/shared/model/study-version.model';
import { StudyType } from 'app/shared/model/enumerations/study-type.model';

export interface IStudy {
  id?: number;
  nid?: string;
  studyType?: StudyType;
  country?: ICountry;
  organism?: IOrganism;
  versions?: IStudyVersion[];
}

export class Study implements IStudy {
  constructor(
    public id?: number,
    public nid?: string,
    public studyType?: StudyType,
    public country?: ICountry,
    public organism?: IOrganism,
    public versions?: IStudyVersion[]
  ) {}
}
