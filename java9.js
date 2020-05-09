function java(){
    var i,j,k,l,m;
    for(i=1; i<=5; i++)
    {
        for(j=1; j<=i; j++)
        {
            for(k=1; k<=j; k++)
            {
                for(l=1; l<=k; l++)
                {
                    for(m=1; m<=l; m++)
                    {
                        document.write("J");
                        document.write('<br />');
                    }
                    document.write("Ja");
                    document.write('<br />');
                }
                document.write("Jav");
                document.write('<br />');
            }
            document.write(':');
            document.write('<br />');
        }
        document.write("Javascript");
        document.write('<br />');
        break;
    }
}