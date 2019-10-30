import React from 'react';

class Tabs extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            tabIndex: 0,
        };
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                <div>
                    {children.map(child => {
                        return <div key={ child.name }>{child.name}</div>;
                    })}
                </div>
                <div>{children[this.state.tabIndex]}</div>
            </div>
        );
    }
}

export default Tabs;
