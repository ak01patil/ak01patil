import { DropDownModel } from "../../_models/DropDownModel";

export class addmenucomponentModel {
    id!: number;
    srno!: number;
    code!: string;
    type!: string;
    txtserch!: string;
    txtselect!: string;
    userId!: number;
    from!: string;
    modulename!: string;
    moduleid!: number;
    sequence!: number;
    pagename!: string;
    resourcegroupid!: number;
    landPage!: string;
    isSubMenu!: string;
    parentId!: number;
    pageid!: number;
    modulelst: DropDownModel[] = [];
    pagelst: any[] = [];
    userid!:number;
}