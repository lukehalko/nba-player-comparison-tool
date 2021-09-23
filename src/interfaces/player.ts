import internal from "stream";
import { TemplateLiteral } from "typescript";


export interface Player {
    order:number
    Name:string
    Position:string
    Age:number
    Team:string
    G:number
    GS:number
    MP:number
    FG:number
    FGA:number
    FGpercent:string
    ThreePt:number
    ThreePtAttempts:number
    ThreePtPercent:string
    TwoPt:number
    TwoPtAttempts:number
    TwoPtPercent:string
    eFGPercent:string
    FT:number
    FTA:number
    FTPercent:string
    ORB:number
    DRB:number
    TRB:number
    AST:number
    STL:number
    BLK:number
    TOV:number
    PFouls:number
    PTS:number
    Rk:number
};