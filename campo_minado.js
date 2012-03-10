function campominado(row, column, values) {
	for(i = 0; i < row; i++)
	{
		for(j = 0; j < column; j++)
		{
			if(values[i*column + j])
			{
				
			}
		}
	}
	
	for(i = 0; i < values.length; i++)
	{
		if (values[i] == '.') {
			if ((values[i - 1] == '*' && values[i + 1] == '*') 
			|| (values[i - 2] == '*' && values[i + 1] == '*')
			|| (values[i - 1] == '*' && values[i + 2] == '*')
			|| (values[i - 1] == '*' && values[i - 2] == '*')
			|| (values[i - 2] == '*' && values[i - 3] == '*')
			|| (values[i + 2] == '*' && values[i + 3] == '*')
			|| (values[i + 1] == '*' && values[i + 2] == '*'))
			{
				values[i] = '2';
			}
			else if (values[i-1] == '*'
			|| values[i + 1] == '*'
			|| values[i - 3] == '*'
			|| values[i + 3] == '*') {
				values[i] = '1';
			} else {
				values[i] = '0';
			}
		}
	}
	return values;
	
}

exports.campominado = campominado;