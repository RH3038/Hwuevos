export interface IDataBaseConfig {
  config : {
    user : string,
    password : string,
    server : string, 
    database : string,
    synchronize : boolean,
    trustServerCertificate : boolean,
  };
}