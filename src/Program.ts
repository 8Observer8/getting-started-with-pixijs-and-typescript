import { Game } from "./Game";

// Playground: https://next.plnkr.co/edit/2dkQtKRY30nvoYmF?preview

class Program
{
    public static Main(): void
    {
        let game = new Game();
    }
}

// Debug Version
Program.Main();

// Release Version
// window.onload = () => Program.Main();