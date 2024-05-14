import Headings from './Headings';
import Paragraphs from './Paragraphs';
import Lists from './Lists';
import Tables from './Tables'
import Images from './images';
import Forms from './Forms';
import Anchors from './Anchors';

export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3>
            <Headings />
            <Paragraphs />
            <Lists />
            <Tables />
            <Images />
            <Forms />
            <Anchors />
        </div>
    );
}