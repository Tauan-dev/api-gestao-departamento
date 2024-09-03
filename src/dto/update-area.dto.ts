import { PartialType } from "@nestjs/mapped-types";
import { CreateArea } from "./create-area.dto";

export class UpdateArea extends PartialType(CreateArea){
    
}