
export class Output
{
    private _outputElement: HTMLDivElement;
    private static _instance: Output;

    private contructor() { }

    public static get Instance(): Output
    {
        if (this._instance === undefined || this._instance === null)
        {
            this._instance = new Output();
            this._instance.Initialize();
        }
        return this._instance;
    }

    public Print(text: string)
    {
        this._outputElement.innerHTML += text;
        this._outputElement.innerHTML += "<br>";
    }


    private Initialize(): void
    {
        this._outputElement = document.getElementById("output") as HTMLDivElement;
        if (this._outputElement === null)
        {
            this._outputElement = document.createElement("div");
            this._outputElement.id = "output";
            document.body.appendChild(this._outputElement);
        }
    }
}