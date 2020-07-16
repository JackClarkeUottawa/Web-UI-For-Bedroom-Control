import React from 'react';
import Link from 'next/link';
interface navButtonProps{
    href?:string;
    text?:string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface navButtonState{
    
}
export default class NavButton extends React.Component<navButtonProps,navButtonState>{
    
    
    render(){
        return(
            <Link href={this.props.href!}><a className="nav-link">{this.props.text}</a></Link>
        )
    }
}