import Link from "next/link";
export default function Navbar() {
    return (
        <div className="mat-toolbar">
            <div className="toolbar-menu mx-auto">
                <span className="toolbar-menu-item mat-headline-4"><Link href='/resume'>Home</Link></span>
                <span className="toolbar-menu-item"> <Link href='/sample'>Sample Preview</Link> </span>
            </div>
        </div>
    )
}