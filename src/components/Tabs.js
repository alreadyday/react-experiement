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
                    {children.map((child, i) => {
                        return <div key={ i }>{child.name}</div>;
                    })}
                </div>
                <div>{children[this.state.tabIndex]}</div>
            </div>
        );
    }
}

export default Tabs;
