import React, { Component } from 'react';
import Tabs from '../../components/Tabs';
import SingleChart from './module/SingleChart';
import StockTable from './module/StockTable';
/*
  in this page, we want to display table and sort
  PER / 阿特曼Z指數(風險評估, 不適用金融和公用事業) /
*/

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Tabs>
                    <StockTable />
                    <SingleChart />
                </Tabs>
            </div>
        );
    }
}

export default App;
