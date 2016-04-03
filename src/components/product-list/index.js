import { connect } from 'react-redux';
import ProductList from './component.js';

function productFilter(items, phrase) {
    const reg = new RegExp(phrase, 'i');

    return items.filter(item => reg.test(item.data.name));
}

const mapStateToProps = state => {
    const products = productFilter(
        state.catalog.data.results,
        state.catalog.searchPhrase
    );

    return {
        view: state.catalog.selectedView,
        data: products,
        noProducts: products.length ? null :
            `We were unable to find results for "${state.catalog.searchPhrase}"`
    };
};

export default connect(mapStateToProps)(ProductList);
