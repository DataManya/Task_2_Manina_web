function ip2long( ip_str )
{
    var parts = ip_str.split( "." );    
    return parts.reduce( function( x, y ) 
    {
        return ( +y ) + x * 256; 
    } );
}

function ip_range( ip1, ip2 )
{
    var ip1 = ip2long( ip1 );
    var ip2 = ip2long( ip2 );
result = 1 + Math.abs( ip2 - ip1 );
    alert("В диапазоне от первого ip-адреса до второго ip-адреса " + result + " адресов");
}


