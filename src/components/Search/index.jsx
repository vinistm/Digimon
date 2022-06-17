import { Input, Button } from './styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDigimonsThunk } from '../../store/modules/digimons/thunks';

const Search = () => {
    const [ input, setInput ] = useState('');
    const [ error, setError ] = useState(false);

    const dispatch = useDispatch();

    const handleSearch = () => {
        setError(false);
        dispatch(addDigimonsThunk(input, setError));
        setInput('');
    }

    return(
        <div>
            <h3>Digite o nome do Digimon</h3>
            <div>
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='digite o nome'
                ></Input>
                <Button onClick={() => handleSearch()}>Pesquisar</Button>
            </div>
            {
                error && <span>Digimon não encontrado !</span>                    
            }
        </div>
    )
}

export default Search;