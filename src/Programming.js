import React from 'react';
// frontend
import html5 from './img/html5.svg';
import css3 from './img/css3.svg';
import js from './img/js.svg';
// backend
import cpp from './img/c++.svg';
import cmm from './img/c--.svg';
import java from './img/java.svg';
import python from './img/python.svg';
// db
import mysql from './img/mysql.svg';
// ide
import vscode from './img/vscode.svg';


const programming = (<div id="programming" class="coaltheme parent">
    <div class="container pt-5">
        <div class="row">
            <div class="column col-sm-6 child">
                <h3><i class="fas fa-code"></i> Programming </h3>
                <br />
            </div>
            <div class="column col-sm-6 tallchild">
                <h3 class="monofont"> Backend Dev. Mainly.</h3>
                <div class="text-left">
                    <table>
                        <tbody>
                            <tr>
                                <th scope="row">Frontend</th>
                                <td><img class="programicon" src={html5} alt="html" /></td>
                                <td><img class="programicon" src={css3} alt="css" /></td>
                                <td><img class="programicon" src={js} alt="javascript" /></td>
                            </tr>
                            <tr>
                                <th scope="row">Backend</th>
                                <td><img class="programicon" src={cpp} alt="c++" /></td>
                                <td><img class="programicon" src={cmm} alt="c#" /></td>
                                <td><img class="programicon" src={java} alt="java" /></td>
                                <td><img class="programicon" src={python} alt="python" /></td>
                            </tr>
                            <tr>
                                <th scope="row">Database</th>
                                <td><img class="programicon" src={mysql} alt="mysql" /></td>
                            </tr>
                            <tr>
                                <th scope="row">IDE</th>
                                <td><img class="programicon" src={vscode}
                                    alt="visual studio code" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>);

export default programming;