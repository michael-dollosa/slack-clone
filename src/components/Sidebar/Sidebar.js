import React from 'react'
import './Sidebar.scss'
import SidebarOption from './SidebarOption'

function SideBar() {
    return (
        <div className="sidebar-container-main">
            <div classname="sidebar-header">
                <div className="sidebar-info">
                    <h2>Avion School</h2>
                    <h3>Bryan Arboleda</h3>
                </div>
            </div>
            <SidebarOption />
        </div>
    )
}

export default SideBar
