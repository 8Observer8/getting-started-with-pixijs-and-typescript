
import * as PIXI from "pixijs";
import { Output } from "./Output";

export class Game
{
    public constructor()
    {
        Output.Instance.Print(`Pixi.js Version: ${PIXI.VERSION}`);
    }
}
