 export type userMessageType = {
    id: number,
    name: string,
    messages: Array<string>,
}
 export type ContactsType = {
    gitHub: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string

}
 export type PhotosType = {
    small: string | null,
    large: string | null

}
 export type profileUserType = {
    userId: number,
    lookingForAJob: string,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType



}
 export type UserType = {
     id: number,
     name: string,
     status: string | null,
     photos: PhotosType,
     followed?: boolean

 }