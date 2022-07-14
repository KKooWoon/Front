export type layoutHeader = {
  title?:string
}

export type pageLayout = {
  header?: layoutHeader | boolean,
  noNav?:boolean,
  hasBack?:boolean,
}