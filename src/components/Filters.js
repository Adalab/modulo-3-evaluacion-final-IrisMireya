import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

function Filters(props) {
    return (
        <section className='filters_container'>
            <form>
                <FilterMovie handlefilterMovie={props.handleFilterMovie}/>
                <FilterYear handleFilterYear={props.handleFilterYear}/>
            </form>
        </section>

    );
}
export default Filters;