export class ActorClassRoot
{
    statbase: number[];
    Name: string;
    rolea: Enumerator;
    status: Enumerator;
    
    constructor(NameIn: string, statbaseIn: any[], role: Enumerator, statusIn: Enumerator)
    {
        //health
        statbaseIn[0] = 100;
        //mana
        statbaseIn[1] = 100;
        //energy
        statbaseIn[2] = 100;
        
        //ATK
        statbaseIn[3] = 5;
        //DEF
        statbaseIn[4] = 3;
        //MGK
        statbaseIn[5] = 5;
        //AURA
        statbaseIn[6] = 10;

        //AGI
        statbaseIn[7] = 3;
        //STR
        statbaseIn[8] = 2;
        //EVA
        statbaseIn[9] = 3;
        //CON
        statbaseIn[10] = 2;
        //END
        statbaseIn[11] = 1;
        //SPR (specials[AURA], energy and magic[MGK] multiplier)
        statbaseIn[12] = 3;

        this.statbase = statbaseIn;
        this.Name = NameIn;
        this.rolea = role;
        this.status = statusIn;
    }
}
// export let config = 
// { 
    
// }