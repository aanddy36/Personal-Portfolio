export interface IProjects {
    id:number,
    title: string,
    description: string,
    portrait: string,
    technologies: string[],
    githubRepo: string,
    url: string,
    imagesModal: ImagesOrder[]
}

export interface Coordinates {
    offsetX: number,
    offsetY: number
}

export interface ILogos {
    logo: string,
    clas: string,
    name: string,
}

export interface ImagesOrder {
    image: string,
    position: number,
    status: string
}

export interface ICertificates {
    id:number,
    title: string,
    hours: number,
    academy: string,
    date: string,
    url:string
}
export interface IFacts {
    sentence:string;
    url:string
}