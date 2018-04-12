export interface IUserPicture {
  data: IUserPictureData;
}

export interface IUserPictureData {
  is_silhouette: boolean;
  height: number;
  url: string;
  width: number;
}

export interface IUser {
  email: string;
  id: number;
  picture: IUserPicture;
  imageUrl: string;
  userId: string;
  gender: string;
  name: string;
}

export class UserPictureData implements IUserPictureData {
  is_silhouette: boolean;
  height: number;
  url: string;
  width: number;

  constructor(json?: IUserPictureData) {
    if (json) {
      this.fromJson(json);
    }
  }

  fromJson(json: IUserPictureData) {
    this.is_silhouette = json.is_silhouette;
    this.height = json.height;
    this.width = json.width;
    this.url = json.url;
  }
}

export class UserPicture implements IUserPicture {
  data: UserPictureData;

  constructor(json?: IUserPicture) {
    if (json) {
      this.fromJson(json);
    }
  }

  fromJson(json: IUserPicture) {
    this.data = new UserPictureData(json.data);
  }
}

export class User implements IUser {

  email: string;
  id: number;
  picture: UserPicture;
  imageUrl: string;
  userId: string;
  gender: string;
  name: string;

  constructor(json?: IUser) {
    if (json) {
      this.fromJson(json);
    }
  }

  fromJson(json: IUser) {
    this.picture = new UserPicture(json.picture);
    this.imageUrl = json.imageUrl;
    this.email = json.email;
    this.userId = json.userId;
    this.gender = json.gender;
    this.name = json.name;
    this.id = json.id;
  }
}
