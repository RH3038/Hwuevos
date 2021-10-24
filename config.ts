export interface IDataBaseConfig {
  config : {
    USER : string,
    PASSWORD : string,
    SERVER : string, 
    DATABASE : string,
    synchronize : boolean,
    trustServerCertificate : boolean,
  };
}