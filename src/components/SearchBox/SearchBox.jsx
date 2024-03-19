import { useId } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
        const elementId = useId();

        return (
            <div className={css.searchContainer}>
                <label htmlFor={elementId}>
                    Find contacts by name
                </label>
                <input className={css.input}
                    type='text'
                    id={elementId}
                    value={value}
                    onChange={(e) => onFilter(e.target.value)}
                />
            </div>

        );
    };
export default SearchBox;