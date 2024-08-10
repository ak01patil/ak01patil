

export class DropDownModel1 {
  id: number;
  name: string;
  resourceName!: string;
  resourceID!: number;
  fromdate1!: Date;
  finishdate1!: Date;
  taskname!: String;
  newid!: number
  taskid!:number;
  projectid!: number;
  toggle: boolean = false;
  toggle1: boolean = false;
  selectedtaskResourceList:number[]=[];
  selectedresourcenameList!: DropDownModel1[];
  resourceName1!: boolean;
  status!:string;
  taskgroupid!:number;
  // subtask!: projectModel[];
  
  constructor(id: number, name: string, resourceName: string,
    resourceID: number, fromdate1: Date, finishdate1: Date, taskname: String, projectid: number) {
    this.id = id;
    this.name = name;
    this.resourceName = resourceName;
    this.resourceID = resourceID;
    this.fromdate1 = fromdate1
    this.finishdate1 = finishdate1
    this.taskname = taskname;
    this.projectid = projectid
  }
}
