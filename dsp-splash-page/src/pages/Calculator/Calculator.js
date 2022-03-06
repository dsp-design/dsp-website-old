import React, { Component } from "react";
//import { InView } from 'react-intersection-observer'
import Papa from 'papaparse';
import "./css/calculator.css";
import DropDown from "./components/DropDown";
import logo from "./assets/images/dspLogo.png";
var pdfMake = require('pdfmake/build/pdfmake.js');
var pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;
var axios = require("axios");
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTotalDetails: false,
            showLocationAndMemberShip: false,
            showSR: false,
            showIM: false,
            showJR: false,
            showAdmin: false,
            showOffShore: false,
            showDuration: false,
            showMeeting: false,
            data: [],
            duration: 2,
            totalCost: 0,
            baseCost: 0,
            totalHours: 0,
            membership: "3",
            meetingsDuration: 0.5,
            weeklyMeetings: 1,
            Subscription: [],
            DurationSavings: [],
            showMembershipSavings: false,
            showDurationSavings: false,
            showFTEDiscount: false,
            showService: false,
            locationFactor: 1,
            cityFactor: 1,
            officeFactor: 1,
            Location: [],
            CityDensity: [],
            OfficeSize: [],
            serviceName: "",
            serviceMail: "",
            servicePhone: "",
            serviceMethod: "email",
            serviceTimeFrame: "7 days",
            serviceBudget: "",
            serviceBestTime: "Morning",
            serviceService: "",
            city: 'Austin',
            location: 'Urban',
            member: 'Partner',
            office: '5-10',
            serviceList: [],

        };
        this.printRef = React.createRef();
        this.options = {

        };
        this.updateFTE = this.updateFTE.bind(this)
        this.updateDropDown = this.updateDropDown.bind(this)
        this.getData = this.getData.bind(this);
        this.printPdf = this.printPdf.bind(this);
        this.openPdf = this.openPdf.bind(this);
        this.sendMail = this.sendMail.bind(this);
        //this.fetchServices = this.fetchServices.bind(this);
    }
    fetchServices() {
        //URL doesn't exist 404
        axios({
            method: "GET",
            url: "https://dspemail.com/api/listActivities",
        }).then(res => {
            console.log(res);
            if(!res.data || !res.data.status){
                console.log("Service Fetching Failed");
            }
            else{
                if(Array.isArray(res.data.services)){
                    console.log(res.data.services.length + "services returned")
                    this.setState({serviceList: res.data.services, serviceService: res.data.services[0].value});
                }
                else{
                    console.log("Malformed services returned");
                }
            }
        }).catch(err => {
            console.log(err);
        })
    }
    printPdf() {
        var dd = {
            content: [
                { layout: 'noBorders', table: { widths: ['*'], body: [[{ text: 'Location Factor & Membership Plan', fillColor: '#38618c', style: 'header', alignment: 'center', color: 'white' }]] } },
                {
                    style: 'tableExample',
                    layout: 'noBorders',
                    table: {
                        widths: ['*'], body: [[
                            {
                                style: 'table',
                                table:
                                {
                                    widths: ['*', 30, '*'],

                                    body: [
                                        [{ text: 'Core City', bold: true, alignment: 'right', borderColor: ['#f4f7fc', '#f4f7fc', '#f4f7fc', '#f4f7fc'] }, { text: '', borderColor: ['#f4f7fc', '#f4f7fc', '#86bc4b', '#f4f7fc'] }, { text: this.state.city, fillColor: 'white', color: 'black', borders: [true, true, true, true], borderColor: ['#86bc4b', '#86bc4b', '#86bc4b', '#86bc4b'] }],
                                        [{ text: 'Location', bold: true, alignment: 'right', borderColor: ['#f4f7fc', '#f4f7fc', '#f4f7fc', '#f4f7fc'] }, { text: '', borderColor: ['#f4f7fc', '#f4f7fc', '#86bc4b', '#f4f7fc'] }, { text: this.state.location, fillColor: 'white', color: 'black', borders: [true, true, true, true], borderColor: ['#86bc4b', '#86bc4b', '#86bc4b', '#86bc4b'] }],
                                        [{ text: 'Membership', bold: true, alignment: 'right', borderColor: ['#f4f7fc', '#f4f7fc', '#f4f7fc', '#f4f7fc'] }, { text: '', borderColor: ['#f4f7fc', '#f4f7fc', '#86bc4b', '#f4f7fc'] }, { text: this.state.member, fillColor: 'white', color: 'black', borders: [true, true, true, true], borderColor: ['#86bc4b', '#86bc4b', '#86bc4b', '#86bc4b'] }],
                                        [{ text: 'Office Size', bold: true, alignment: 'right', borderColor: ['#f4f7fc', '#f4f7fc', '#f4f7fc', '#f4f7fc'] }, { text: '', borderColor: ['#f4f7fc', '#f4f7fc', '#86bc4b', '#f4f7fc'] }, { text: this.state.office, fillColor: 'white', color: 'black', borders: [true, true, true, true], borderColor: ['#86bc4b', '#86bc4b', '#86bc4b', '#86bc4b'] }],
                                    ]
                                }
                            }
                        ]]
                    }
                },
                { layout: 'noBorders', table: { widths: ['*'], body: [[{ text: 'Senior Level Designers', fillColor: '#3f89b3', style: 'header', alignment: 'center', color: 'white' }]] } },
                {
                    style: 'tableExample',
                    layout: 'noBorders',
                    table: {
                        widths: ['*'], body: [[
                            {
                                style: 'tableLevel',
                                layout: 'noBorders',
                                table:
                                {
                                    headerRow: 1,
                                    widths: ['*', 40, 40, '*', 40, 40],

                                    body: [
                                        [{ text: 'Role', bold: true, alignment: 'center' }, { text: 'Rate', bold: true, alignment: 'center' }, { text: 'FTE', bold: true, alignment: 'center' }, { text: 'Role', bold: true, alignment: 'center' }, { text: 'Rate', bold: true, alignment: 'center' }, { text: 'FTE', bold: true, alignment: 'center' }],

                                    ]
                                }
                            }
                        ]]
                    }
                },
                { layout: 'noBorders', table: { widths: ['*'], body: [[{ text: 'Intermediate Level Designers', fillColor: '#3f89b3', style: 'header', alignment: 'center', color: 'white' }]] } },
                {
                    style: 'tableExample',
                    layout: 'noBorders',
                    table: {
                        widths: ['*'], body: [[
                            {
                                style: 'tableLevel',
                                layout: 'noBorders',
                                table:
                                {
                                    headerRow: 1,
                                    widths: ['*', 40, 40, '*', 40, 40],

                                    body: [
                                        [{ text: 'Role', bold: true, alignment: 'center' }, { text: 'Rate', bold: true, alignment: 'center' }, { text: 'FTE', bold: true, alignment: 'center' }, { text: 'Role', bold: true, alignment: 'center' }, { text: 'Rate', bold: true, alignment: 'center' }, { text: 'FTE', bold: true, alignment: 'center' }],

                                    ]
                                }
                            }
                        ]]
                    }
                },
                { layout: 'noBorders', pageBreak: 'before', table: { widths: ['*'], body: [[{ text: 'Junior Level Designers', fillColor: '#3f89b3', style: 'header', alignment: 'center', color: 'white' }]] } },
                {
                    style: 'tableExample',
                    layout: 'noBorders',
                    table: {
                        widths: ['*'], body: [[
                            {
                                style: 'tableLevel',
                                layout: 'noBorders',
                                table:
                                {
                                    headerRow: 1,
                                    widths: ['*', 40, 40, '*', 40, 40],

                                    body: [
                                        [{ text: 'Role', bold: true, alignment: 'center' }, { text: 'Rate', bold: true, alignment: 'center' }, { text: 'FTE', bold: true, alignment: 'center' }, { text: 'Role', bold: true, alignment: 'center' }, { text: 'Rate', bold: true, alignment: 'center' }, { text: 'FTE', bold: true, alignment: 'center' }],

                                    ]
                                }
                            }
                        ]]
                    }
                },
                { layout: 'noBorders', table: { widths: ['*'], body: [[{ text: 'Administrative Staff', fillColor: '#3f89b3', style: 'header', alignment: 'center', color: 'white' }]] } },
                {
                    style: 'tableExample',
                    layout: 'noBorders',
                    table: {
                        widths: ['*'], body: [[
                            {
                                style: 'tableLevel',
                                layout: 'noBorders',
                                table:
                                {
                                    headerRow: 1,
                                    widths: ['*', 40, 40, '*', 40, 40],

                                    body: [
                                        [{ text: 'Role', bold: true, alignment: 'center' }, { text: 'Rate', bold: true, alignment: 'center' }, { text: 'FTE', bold: true, alignment: 'center' }, { text: 'Role', bold: true, alignment: 'center' }, { text: 'Rate', bold: true, alignment: 'center' }, { text: 'FTE', bold: true, alignment: 'center' }],

                                    ]
                                }
                            }
                        ]]
                    }
                },
                { layout: 'noBorders', table: { widths: ['*'], body: [[{ text: 'Off-Shore Staff', fillColor: '#3f89b3', style: 'header', alignment: 'center', color: 'white' }]] } },
                {
                    style: 'tableExample',
                    layout: 'noBorders',
                    table: {
                        widths: ['*'], body: [[
                            {
                                style: 'tableLevel',
                                layout: 'noBorders',
                                table:
                                {
                                    headerRow: 1,
                                    widths: ['*', 40, 40, '*', 40, 40],

                                    body: [
                                        [{ text: 'Role', bold: true, alignment: 'center' }, { text: 'Rate', bold: true, alignment: 'center' }, { text: 'FTE', bold: true, alignment: 'center' }, { text: 'Role', bold: true, alignment: 'center' }, { text: 'Rate', bold: true, alignment: 'center' }, { text: 'FTE', bold: true, alignment: 'center' }],

                                    ]
                                }
                            }
                        ]]
                    }
                },
                { layout: 'noBorders', pageBreak: 'before', table: { widths: ['*'], body: [[{ text: 'Duration (weeks)', fillColor: '#5fafdc', style: 'header', alignment: 'center', color: 'white' }]] } },
                {
                    svg: `<svg height="25" width="500">
                        <g fill="none">
                        <path stroke-width="2" stroke="#e2e1e3" d="M5 20 l500 0" />
                        <path stroke-width="3" stroke="#85bc4b" d="M5 20 l${(parseInt(this.state.duration) - 2) / 16 * 500} 0" />
                        <circle cx="${((parseInt(this.state.duration) - 2) / 16 * 500) + 5}" cy="20" r="5" stroke="white" stroke-width="3" fill="#5fafdc" />
                        </g>
                    </svg>`
                },
                {
                    svg: `<svg width="500" height="40" xmlns="http://www.w3.org/2000/svg">
                    <g>
                     <title>Layer 1</title>                     
                     <text stroke="#000" font-style="normal" font-weight="normal" xml:space="preserve" text-anchor="start" font-family="'Montserrat'" font-size="14" id="svg_3" y="20" x="5" opacity="undefined" stroke-width="0" fill="#000000">2</text>
                     <text xml:space="preserve" text-anchor="start" font-family="'Montserrat'" font-size="14" id="svg_6" y="20" x="64" opacity="undefined" stroke-width="0" stroke="#000" fill="#000000">4</text>
                     <text stroke="#000" xml:space="preserve" text-anchor="start" font-family="'Montserrat'" font-size="14" id="svg_9" y="20" x="187" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="0" fill="#000000">8</text>
                     <text xml:space="preserve" text-anchor="start" font-family="'Montserrat'" font-size="14" id="svg_11" y="20" x="245" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="0" stroke="#000" fill="#000000">10</text>
                     <text style="cursor: move;" xml:space="preserve" text-anchor="start" font-family="'Montserrat'" font-size="14" id="svg_12" y="20" x="300" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="0" stroke="#000" fill="#000000">12</text>
                     <text style="cursor: move;" xml:space="preserve" text-anchor="start" font-family="'Montserrat'" font-size="14" id="svg_13" y="20" x="360" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="0" stroke="#000" fill="#000000">14</text>
                     <text style="cursor: move;" xml:space="preserve" text-anchor="start" font-family="'Montserrat'" font-size="14" id="svg_14" y="20" x="418" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="0" stroke="#000" fill="#000000">16</text>
                     <text xml:space="preserve" text-anchor="start" font-family="'Montserrat'" font-size="14" id="svg_15" y="20" x="475" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="0" stroke="#000" fill="#000000">18+</text>
                     <text xml:space="preserve" text-anchor="start" font-family="'Montserrat'" font-size="14" id="svg_16" y="20" x="122" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="0" stroke="#000" fill="#000000">6</text>
                    </g>
                   
                   </svg>`
                },
                { layout: 'noBorders', table: { widths: ['*'], body: [[{ text: 'Meeting Calculator', fillColor: '#5fafdc', style: 'header', alignment: 'center', color: 'white' }]] } },
                { text: `Cost Per Meeting : $${Math.ceil(this.state.meetingsDuration * this.state.totalCost * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor).toLocaleString()}`, style: 'subheader', alignment: 'center' },
                {
                    layout: 'noBorders', table: {
                        widths: ['*', '*'], body: [
                            [{ text: 'Weekly Meetings', style: 'subheader', alignment: 'center' }, { text: 'Meeting Durations (Hrs)', style: 'subheader', alignment: 'center' }],
                            [
                                {
                                    svg: `<svg height="25" width="250">
                                        <g fill="none">
                                        <path stroke-width="2" stroke="#e2e1e3" d="M5 20 l230 0" />
                                        <path stroke-width="3" stroke="#85bc4b" d="M5 20 l${(parseInt(this.state.weeklyMeetings) - 0) / 3 * 230} 0" />
                                        <circle cx="${((parseInt(this.state.weeklyMeetings) - 0) / 3 * 230) + 5}" cy="20" r="5" stroke="white" stroke-width="3" fill="#5fafdc" />
                                        </g>
                                    </svg>`
                                },
                                {
                                    svg: `<svg height="25" width="250">
                                        <g fill="none">
                                        <path stroke-width="2" stroke="#e2e1e3" d="M5 20 l230 0" />
                                        <path stroke-width="3" stroke="#85bc4b" d="M5 20 l${(parseInt(this.state.meetingsDuration) - 0.5) / 1.5 * 230} 0" />
                                        <circle cx="${((parseInt(this.state.meetingsDuration) - 0.5) / 1.5 * 230) + 5}" cy="20" r="5" stroke="white" stroke-width="3" fill="#5fafdc" />
                                        </g>
                                    </svg>`
                                },
                            ],
                            [
                                {
                                    svg: `<svg width="250" height="40" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                        <title>Layer 1</title>                     
                                        <text stroke="#000" font-style="normal" font-weight="normal" xml:space="preserve" text-anchor="start" font-family="'Montserrat'" font-size="14" id="svg_3" y="20" x="5" opacity="undefined" stroke-width="0" fill="#000000">0</text>
                                        <text xml:space="preserve" text-anchor="start" font-family="'Montserrat'" font-size="14" id="svg_6" y="20" x="76" opacity="undefined" stroke-width="0" stroke="#000" fill="#000000">1</text>
                                        <text stroke="#000" xml:space="preserve" text-anchor="start" font-family="'Montserrat'" font-size="14" id="svg_9" y="20" x="150" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="0" fill="#000000">2</text>
                                        <text xml:space="preserve" text-anchor="start" font-family="'Montserrat'" font-size="14" id="svg_11" y="20" x="220" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="0" stroke="#000" fill="#000000">3</text>
                                        </g>                           
                                    </svg>`
                                },
                                {
                                    svg: `<svg width="250" height="40" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                        <title>Layer 1</title>                     
                                        <text stroke="#000" font-style="normal" font-weight="normal" xml:space="preserve" text-anchor="start" font-family="'Montserrat'" font-size="14" id="svg_3" y="20" x="5" opacity="undefined" stroke-width="0" fill="#000000">0.5</text>
                                        <text xml:space="preserve" text-anchor="start" font-family="'Montserrat'" font-size="14" id="svg_6" y="20" x="76" opacity="undefined" stroke-width="0" stroke="#000" fill="#000000">1.0</text>
                                        <text stroke="#000" xml:space="preserve" text-anchor="start" font-family="'Montserrat'" font-size="14" id="svg_9" y="20" x="150" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="0" fill="#000000">1.5</text>
                                        <text xml:space="preserve" text-anchor="start" font-family="'Montserrat'" font-size="14" id="svg_11" y="20" x="220" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="0" stroke="#000" fill="#000000">2.0</text>
                                        </g>                           
                                    </svg>`
                                },
                            ]
                        ]
                    }
                },
                {
                    style: 'tableExample2',
                    layout: 'noBorders',
                    pageBreak: 'before',
                    table: {
                        widths: ['*'], body: [[
                            {
                                style: 'tableLevel',
                                layout: 'noBorders',
                                table:
                                {
                                    body: [
                                        [{
                                            style: 'tableHeader',
                                            layout: 'noBorders',
                                            table: {
                                                widths: [70, 50, 50, 50],

                                                body: [
                                                    [{ image: 'data:image/png;base64,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UCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNTBkODBkZS01MGU0LWVmNGItOGVlYS1lNzM0NDczZmFiMmYiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTkxMGE5YmYtMDJjMC00MGU0LTg4MDgtODZmNmYwMjhhN2FjIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YTNlYTQ0OTQtNGNkOC1hYTQ4LTk4OTktZjc4YzhlMjg4NmFkIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTYxNzE3MTc1MDkxMDcwMCIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjIyIgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIKICAgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wMy0yMVQxMToyNzo1Mi0wNzowMCIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDMtMjFUMTE6Mjc6NTItMDc6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAzLTIxVDExOjI3OjUyLTA3OjAwIj4KICAgPGlwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICA8aXB0Y0V4dDpMb2NhdGlvblNob3duPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25TaG93bj4KICAgPGlwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICA8aXB0Y0V4dDpSZWdpc3RyeUlkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6UmVnaXN0cnlJZD4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphM2VhNDQ5NC00Y2Q4LWFhNDgtOTg5OS1mNzhjOGUyODg2YWQiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAxOS0wMy0yMVQxMToyNzo1Mi0wNzowMCIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMzllMzI3My0yZWQxLTNhNDEtYTBlMi1jOWZmZWFlMGUyODkiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAxOS0wMy0yMVQxMToyNzo1Mi0wNzowMCIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYTAzMTY0NC05OGFiLTRmNzktYTcxNy1mYjE0NmE3YmYzMzUiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjEtMDMtMzFUMTE6NTI6MzAiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogICA8cGx1czpJbWFnZVN1cHBsaWVyPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6SW1hZ2VTdXBwbGllcj4KICAgPHBsdXM6SW1hZ2VDcmVhdG9yPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6SW1hZ2VDcmVhdG9yPgogICA8cGx1czpDb3B5cmlnaHRPd25lcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkNvcHlyaWdodE93bmVyPgogICA8cGx1czpMaWNlbnNvcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkxpY2Vuc29yPgogICA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgPHJkZjpCYWc+CiAgICAgPHJkZjpsaT54bXAuZGlkOmMzNmRlMTU3LTk3ZmItYmM0NS04Y2MwLTk3NzBmZTA3N2JhOTwvcmRmOmxpPgogICAgPC9yZGY6QmFnPgogICA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PjfVjdwAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAALEsAACxLAaU9lqkAAAAHdElNRQflAx8GFh4nnemOAAAWG0lEQVR42u1deVwUR9p+qme4QbkZDkFuQRSR24h3POMZryTEG49sdrPf5nP3W5M1m2x+frtrErP7ZTcqKsaoG816ROMVo+KBDAgoyqGCcijMcIvcMN31/QGyzHQ3zADiJPD8w4/uqu6u95mq96i3qgj0HLGJCnsQEghQbwCBBgzj0sJRBwmBGUfhQwGmY3kCcACyKNAEoBCgZQDSQZEDID0m0rFUn9sr1bcPCh0/YyhL6ZyqmvooYwNpJAhxbhc1gBaOAgBYKly/jaCAtn+Dn9V79mdXkrIYFIkSgms2pgZn5oywuadP7Sf68BF7kpQhLMX8E7s/fyMt8Ypbx3t/3HX0eb++AMABCcGxVeGylH7bQ3bKlbaGDFnTwtFVLIU3AIBhXsSnuAHYxFJs2iVX5hhKSFyjisaujZSV9wtCYuVKPymDTSyHV1s4aqJPwwUFvJtYuoUQvL8nSXmIpdgaEyHL/lkSEitX+gHYBCBaxelev6WpEfW1NaiuKIVK1YKqUkVHQaqNvYbGJhhkZQtjUzOYmFtgkJWtrq8zZSlWAlgZK1fuB7Clr4h57oTskitsCcjHHLCuO/Xjjx9A3t0MFOT2TPeOioiCk7s3nIZ6wdbRBcam5tpWjQYQvSdJuZ0h2LwiTFb2k1Xqu5OU6wnIX1lKLbQpfyLu70hLiO+THusfFIrhYVEY4jkMg6y17kEVEoL3V4XLtv+kCIlLUroTQg60cDRSl3p9SUhHBIREIGjsFLj6DIeBoVGX5SUElwwlzOroEPs8vSckLlm5TMXhSwCmnZVrqKuBiZmFXhDyDIOtrDFx7lL4BkXAxKzLIa3eUELWLQ912K+XhMTKlaYE+JICyzorV1ZciCsnD8F7ZAhGRk7UK0KewdjEBFMXLkNAxHgYGhl3roQZ7FNx2BATIavvjXf3iuG/M1HhRoBLnZFR9/QJzh/eg39s/jXu3EjU63BNY0MDTny9A/94/23cu5UEllWJllVxWCZhyKU9SQo3vSDkdEZ5GCHkMgXChO5zLIuslAR8+cGvkfDD9/gpobqqEv/64i84uuMTVJUpRcuxHA1jKbl8JL1s+AslJFaujCqqVV1q83Z5qK2uwrFd23B4+6eorXmKnyoy05Lxt9+/hczkK531FreqBjY5Vq6MeiGEtL34rJjyfpSbjdiPN+LOjev4ueDbnZ/j1L5/orGuVszTNwVwtiekML1NBuU4pF4+i91/fg/VVZX4uSEtIR57/vx7VHaIFGh6+T0hRWdCTmWUh4mRwbIqnDu0Gye/3omfM0oVRdjx0bsouJchSgoBzh7thk7RiZCdiQq34lrVYSEymhsbcO5gLOQXzqA/oKmxEXFbNyP/7h3R4auigT2lq/WlNSGxcqWplCFHhBR4U0M9juz8FMmXz6O/Ye8nH+BBRpqoogdhDscmKkx7nRCGYAdLESw0TJ39Vyzu3U5Df8XXn38s2lNYjoYZSJgve5WQvcklyziKaCEyzh+Ow83rl9HfsfeTD1B4P1PwXgtHl+27URLdK4R8laz0aOGoIMMpF0/3G52hlVm841NR66uJpTsOpJS695gQCrJfSInn3E7BmUN7B1jogJrqJzgW+5mYn2LaxNLdPSJkd5JyvVAIvapMiX/94y8DDAg5xHkPcOn4gVY7S3OIp3RirFy5tluE7ExU2AL4K++hKhVO7fsSHMsOSF8ESZfOITtFNEKx5asbJXY6E8IQ8jFHwZvpu3n1B+Rm3xmQepdhlm14WimYuGLDUXykEyGxcqUfFZgDr1AW4fsDuwakrQU4jsOFI/vETOH1bUkfWveQTULq/eKx/QOS1gHpSdfwMPOWkBcvImMBQtqY49nMDzNvITM1aUDKOuL8t3vR0twkdCt6l0Av4REiIXzmWFaFC0cHekd3oHhciKyUBMF7EgYbOyVkZ6LSlqV4VbNQfvYdFBXkDUi3m7h47CCamxp511UclsQmKuxECTFgsBaACb93fD0g1R6guqoSuXdSBZ1FEPKmKCEcsIbX5fJzUVyYPyDVHiLh9FHB6V8CrBckZG9ySRhH4c73O34ckGYvoKgwD4r8B0IWl/dOubI9ii7tcIOnO2qeVCD12sUuX+bi7omIl2fD3tmtPcn5P8+oRHVFKXIz0hB/8t/9mpS7aYlw8fQV6iULAKSqEaLi6BLNgoU5nSd8D3H3wrSlq+DiOUy0jIWlNSwsreHiOQyhE2fi8olvkBz/Q48a5ubpg9BJM2Hv7ApzSxuYmluo6by66irUVFehXPEY924mIevmjR4L083LFyPCo2Dn5AqJgQEYwqCluQl1NU+gLMxDyuXzqBdJfniGa+dOIOqVRTAyMdO89QaA99rIAfbfUPo2sLirWWr/px+IhkmmzH8NkdPmQSI10LlxaZfPQWpoqHPmorOrO6a/vgZDvPx0el9DXS2yUxNwYt8O3r3RL03AnJW/6uBv3cS+bX9q/z9ozHhETp0He5fOZ2JZVQsKc7Jw5eRh5N0X/yFHv7MJXiNCeNelDHFfGeaQLwWAJg6zNAvUPn0iSsbs6BgET5jR7V/b6PHTUFtdpVOd8InTMHF+tNpwqC1MzMzhFTBaq7JO7q2LuYxNTLBgzTvwCQzTqp5EagB3v0C4+gzHrWs/iiZ6FNzLFCSEUjoHwN+lbfpjLM+6yssRfOD0xctFyagsVSAvOx2FOdlIl18FAASGj4XM1R3ufoGQuXq0lzUfbKW1QL38RmDKohVaZab3FMam5giJmowxMxbA2t5R5/oSiRTB46fDVuaCuK2b+dbWDycxYf4bkEjUl+awlEb9hxCKcJ5VkHef9zDv4YEInTxLsLtePfWtoNJOT7qG9KRrAL7G8OBwTJjzGuycXXVq5PTX1wiSUVmqQF7WLTx+eB+ZqXI0NzXBzcsXNg6OcHTzhKObJ+ychgiN2Z1iysLlMNbIfn9aWY7SogJUV7SuqjYwNIKNowvsnd0Ev83NNwCL1/0Gh3d8pnad4zhUlhTDzkldBgwhkQAgPZtV4froaYuT5gOzbybzXjJh7lI+syoVju/+m1YZipmpSchMTcL8VW8jcMwkrYQTMm4ybB2H8PXQlXOCOqEg917raqsOuih47ES4ePhq30s6kFFe/AgJZ4+K5g0MtrLG1MXLMWx0JE82/qFjMTrjJtISLqldLyt+xCOEo3DenaSwZxS1Kp6GrK+pRknRI/WHB4XCWaBRCWeO6JwuemzPF2KeKw8+gaG8a49yswXJEEPqtUv4bp9ui544jkXalXP4YvM7nSZxVFdV4tsd23D+cJyg4zduNs94Rckj4TAU5Wggo+KoJ+8lFfxldKNemiQ4ZFz87lC3xur6Wu2Sr20ceJ0X924+/6hz/LEDOpEuv3AG188c4V23tLXHS1Nf0cqdIITxZgAEat54WlXBK+zqzc+KvHXt+XvxQuOztmR2F49ysnDlzHGd6104fgilRQW86yMiJqj9n3c/W7A3UdBARsoQnoFdW13JU+aaSq65qRFXTh97IR6vqfmg5/r8lpbmbtdNu8J3eu2d3TDI0lLtWp2A2U8p7BgVR3lLUMsUj9X+9/DndSJUKB/3ifCFwtYB4eP0Njwiv3AGjfV16haURIKA0Jd4zqrAmOXKMAS8n1tzYwNvHNREVamyTxpYruATL3P1wJpN/wsn16F6SUqFsoh3TdNS1CSt1fSFkZQ+22dEbch60uUQ0VBX0yeNS738A3wCw8BIJOoBTQ9frH7vrygpzEPB/Qzk3E7Fw3tZ+kFISRGcPXw6NU4opUJDlp9UaJej+xm3tBhKmvqkcTmZ6chOvY7hYVGCXrGTuzec3L0ROW0+GutrUaEsRmFOFjKSrqKo8MXMcgoNs5qoeVIhoNQh0WprDUZgl54n5SV91sBvd26DRCrFsNGRXYY9nD184Ozhg8hp86AoeIDEc8dxOzmhTwkpKyoU+DazTtVCu6y1eYFQ9zK3tO7TRn7zz604sn0rivNzta7j6OaJBWvfxWu/+G2ffmtLM99KMzLWbomIVIwAQkinhJiamff5UHAnJRF3UhLh7OqOgPCxcPX2h43MucuNZHyDIgTjSs8LQrtA1Nao62WxaQspAT8teKj3MLXddziOFRweXhSKCvPU9IOHrz+8RwbD1Wc4ZK4evJgSAPgFj4F/0NVemazqCtb2Mt41tqVFPQZmw7dcCcBKCUGOpqVl4+CoRkhlSTHc/QI1XuoIfcHDe1ntFpaT61DMjF7HCyYShkHgmIl9QoihsUmXil5ILxOCbIaj4MUhiEbhUgElZePoopc+QHFhPnZt+T2UhQ+79AWeXw/hx980d4IwMOKHhDiKJkZCwEvRdnJTjzemXPkRrEo99mJoZIyx0+fqrcecfv2iQFzMsE/ebSvwY9VcQm0+yFJIeRcyLEUBXympr0JgWVYwZDx63Mt6G49qaqh/IT+EsdPmwMjEVONb6pCZlqwh40ECQxYpYwCka94YZMNfT3JbHi/YNV9e8IbOHx05ZSY8hwc9V8FoCgUAr5c/DwSNm8q79viB+vaEDs4ugkMWAdIZKUN42VuW1naCQTOhBY0R0+YiYrL2CQ+zXl+NKYtW8PRUb2NYUIRgSEMbGBh0b2ibMHuh4PyNZrKhp0CwtlWHcDmMo7lBtpDTZzF4MK/C5RPf8HwSiUSKaUtWY8n6d2FpbSP6saMix+GtD7chdNIsQbO0M8xdvh7BYydpXX72m2vh5hvAD8NoOUs5xNsfC2Pe0ekbfQJGYezMhbzrivxcZKTKeQ6roJdOSLp0ur91YaxcWQxAjdqR4eOQ8MNJdUUpvwpP/0CM1JgPJwwDv5CX4B0YhrLiQpQVF6KlzcyztJXBzmkIb6PJxvparX0Zz+FBCIqaiqlLVqGsuBCKggdQFDxARYkCBbn3YGhohOEhEXAa6gXPgNGCJnmFsghJF89pLeCA8PGQuXrg0vGDXa6LGT/rVUS9sghSjZ7Fsipc+f4wr7zmfHorGShaHe5YKm2zf5MoxXy1X4mXH6BBCAAc3fMFLKxseH4JAEgNDNqzPTpDZakC8d8dxIKYd3XWCy6ewzrNlBQCq2rBmYO6b4hj6zgEizb8DuMf5yPv7m0oCh7iTnICWJbFqMgoDPHyg7tfoKhPlnrpDLJv8XcvFxrWOEoT20MnDHCNhTohDkPE17h/9emHmLFkBUImzdR5+Mm5nYLv4r5Abc1TzHh9Lc+i631rqw6Xjh1Abpb2C1Ubamtg0iE91d5lKOxdhgIA5q3+tVbPSLt8Dqe/ieNdDxk3GQYC+zhKCK62BxcNGHpKs4CVnQOc3cRJOXNoL/Zs+R0eZt4UW7KlhrKiQpzc+3848Pct7bvLPcrVbrPo3Dtp3Zp/efzgLvZ9shnyi2d1qqcofIDU+DMQWmvedW9UIeH0v3Hia+EECe8RwYLXCWFOtFlarYiVK/OhsdNPavxZnNzfdVc3NDJC+KQZcHAZCgtLa0ikUlBKwbEsyooLkZF8Ffk5PT8Vwj8oFL5B4bB1dIHFYCuYDbZS66ENdbWoeVKB0scFSIk/i/ycu10+UzO3FwAeZt3Cvs8+wuiXJmDSgmiYD7bW8gdwD+e/jUNB7n3RMhu3xcHMgmcwFcREyIa2D1kAIGXIIRVH1eLU7iLmGT9O04Sr3cjS0BVZN2/0SSyqfdhJiEdaQjzGzZwPz4AgWNnJ1PaRb6yvw9Oq1ozGpB+/x6OHuV2SL0AGABxo56GD334EwG81A4h+gcHITk9Ff8aV08d6JcNGLDmDAu2HpLR7ZyvDZMkMAS8+EjJxBgbQcwy2soarl7+Qd56zNkKWyiOk7SZvmwY33wBY2dgOSLSHmDh3CaQCwU1DCVEzxdQIUXHYCaBB3bcwxIQ5Swck2gMQQsTWmdQ3qbhdooSsjZSVMwS8BFW/kDEYbGU9INluYvqS5TAVUOZSBodiIh3LRAlp9RixhW/WGuPlhcsGJNtN3RE4ZrLgPRWHrbwQiuaFtqN99gv1EpehHgMS1hEvL1omtgxvv9AxSmIxcF4vkUikmPHG2gEJ6wBPvwD4BY+BtjIWJSQmQpZNAJ7v7+zug3Ez5w9IWktMW7paMNYnIdgudsiY6CwRR+n7DAEvgDRm+nxY29kPSLsLzHxtFeydBZdSV0gYslmsnighayMdyzU9d6A1H2vR+o0DEu8EPgGBCJ4wXdgEBjYtD3Uo05kQAFgdLtsuJeAdh+Po5ol5K94akLyIVfXK8rfFhqpLayJknUZru5zYJgTRAHgpHCMjJ+o0l95fsGj9f2OQleBUdr2hhFndVf0uCVkRJntoJCFv8ypKJJi84E14+Y0YYKENi9f9RnQ201BC1mlzzJ5WqR/LQh3ipAQHNa8bGBlj4fqN8PQL6PdkzI6OgX/oWMF7UoJ92h6vp3UujooihiHgxeGNzcyxcP1GuPv49WsyxLYbkTAkWUWxQdtnaU1ITISsnmvdj1Ew03HxL/6nXw5fXWzEU0A5brEuZxzqlK0WEyErcDKXLhFS8iZmFli4fiO8/PsPKfNWvNUZGfWWRsys1RGOBbo8U+f0wVkBtkkApguRYmxmjqW/ev9nb30Zm5hi5caPMGrsFFEyAExfFGSfqeuzu5XPGRMhuypGilRqgOmvrcGC1b/8WZLhMWw41v5hq2BmZEcy2mSEPiGkK1IAgpGRE7Hhj5/p7Vry7mD8rAVY+sv3Olus1CMyekTIM1KczaWThBQ9ADi4DMWK323B5Hk/7RlHKxs7rNz4ESbOj+7ssOKCwUZMWE/I6DEhADCzVaeMFzKJgdbJrahXFmPDB59hWGDwT46M6YuXYcOHn3c2REFCSBKhdPzibugM/tjSS4iVK00Zgh1Ch4c9A8uqkJ99GxeO7tebzZnFEuXup99A+JTZsLKTdVq/9fhuuiEmwrFXVgj1+gH3e5NLlrUdIia6MJtVqZB/Vz+IESKEVbVos9tqvQFD1q0I09MD7jviq2SlBwXZL3R+VUdwLIvi/BzcTozv8V6+vUlIVzCSkOuEkOg3tYhN6QUhz7A7SbkBwF+Ejk7i/dxqn6Lg7h1kpyXidvJ1fSWkQkLw/qpw2fbn9T3keTd4Z6LCliHkY6EjlMTQWF+L0scFKHp4H3l3b+N+RnovOHMmGBU5HrkZt1DeYWspbQlhCLYzBH9YGSYrf57yIn31S2w7uWcTgGhd67Y0N6Gu+gmqK8tQ86QCTQ31qCxViixRILB1dIaRsQkG29jD1HwQLKxsYNG2N8vBv/0J9+/c1IWQ/QC2iM2B9zakfUVIW4PejJUrt0gINnEUr1KNs0rEYGBoBEs7B1jaOfTV59YbMuRoM0f7jIg+J0STmB2Jyv8ykpC1HKVrWIFjMl4ECJBjICF7mli6a3mYQ/mL+Abpi2r8ukhZOVpzk7Z8daMkrJmlc9F6SoBbn34I5QoAHJAw5NiqMIcUPfhR6BcO3yz1rW3mZlFgLKUIpxqrg3uK4zu2FmXfupFoa2lxlSE4Ib94Kl+f2q93hPAEeLvcuaqRDVBxnCdAAg0lxLWZpXYSgkEc4K25lRfT2qK7HEWdlCElKo4+Bmg6QHJAaXpMpGOpPrf3/wHZJ1cZ9xESRAAAAABJRU5ErkJggg==', fit: [50, 50] },
                                                    { text: 'Hours  |', margin: [0, 15] },
                                                    { text: 'Costs  |', margin: [0, 15] }, { text: 'Savings', margin: [0, 15] }]
                                                ]
                                            }
                                        }],

                                    ]
                                }
                            }],
                        [{
                            style: 'tableLevel2',
                            layout: 'noBorders',
                            table:
                            {
                                body: [
                                    [{
                                        style: 'tableHeader',
                                        layout: 'noBorders',
                                        table: {
                                            widths: [210, 210],
                                            body: [
                                                [{ layout: 'noBorders', table: { widths: ['*'], body: [[{ text: 'Total Hours & Cost', fillColor: '#38618c', style: 'header', alignment: 'center', color: 'white' }]] } }, { layout: 'noBorders', table: { widths: ['*'], body: [[{ text: 'Savings', fillColor: '#38618c', style: 'header', alignment: 'center', color: 'white' }]] } },],
                                                [{
                                                    layout: 'noBorders',
                                                    margin: [5, 10],
                                                    fontSize: 12,
                                                    table: {
                                                        widths: ['*', 'auto'],
                                                        body: [
                                                            [{ text: 'Total Hours', bold: true, margin: [20, 5, 10, 5], fontSize: 10 }, { text: (this.state.totalHours * this.state.duration).toLocaleString(), bold: true, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10 }],
                                                            [{ text: 'Total Cost', bold: true, margin: [20, 5, 10, 5], fontSize: 10 }, { text: "$" + Math.ceil((this.state.totalCost * this.state.duration + parseInt(this.state.Subscription.filter(subs => subs.tier === this.state.membership).map(value => value.mobilization)) + parseInt(this.state.meetingsDuration * this.state.totalCost * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor * this.state.weeklyMeetings * this.state.duration))).toLocaleString(), bold: true, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10 }],
                                                            ['', ''],
                                                            [{ text: 'Mobilization Fee', margin: [20, 5, 10, 5], bold: false, fontSize: 10 }, {
                                                                text: "$" + this.state.Subscription.filter(subs => subs.tier === this.state.membership).map(value => {
                                                                    console.log(value)
                                                                    return Math.ceil(value.mobilization * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor).toLocaleString()
                                                                }), bold: false, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],
                                                            [{ text: 'Cost of Meetings', margin: [20, 5, 10, 5], bold: false, fontSize: 10 }, {
                                                                text: "$" + (Math.ceil(this.state.meetingsDuration * this.state.totalCost * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor * this.state.weeklyMeetings * this.state.duration).toLocaleString())
                                                                , bold: false, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],
                                                            [{ text: 'Weekly Cost', margin: [20, 5, 10, 5], bold: false, fontSize: 10 }, {
                                                                text: "$" + (Math.ceil(this.state.totalCost * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor).toLocaleString())
                                                                , bold: false, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],
                                                            [{ text: 'Min Weekly Burn Rate', margin: [20, 5, 10, 5], bold: false, fontSize: 10 }, {
                                                                text: "$" + (Math.ceil(this.state.totalCost / 2 * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor).toLocaleString())
                                                                , bold: false, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],
                                                            [{ text: 'Min Hours Per Week', margin: [20, 5, 10, 5], bold: false, fontSize: 10 }, {
                                                                text: (this.state.totalHours / 2).toLocaleString()
                                                                , bold: false, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],
                                                            [{ text: 'Max Weekly Burn Rate', margin: [20, 5, 10, 5], bold: false, fontSize: 10 }, {
                                                                text: "$" + (Math.ceil(this.state.totalCost * 2 * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor).toLocaleString())
                                                                , bold: false, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],
                                                            [{ text: 'Max Hours Per Week', margin: [20, 5, 10, 5], bold: false, fontSize: 10 }, {
                                                                text: (this.state.totalHours * 2).toLocaleString()
                                                                , bold: false, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],

                                                        ]
                                                    }
                                                },
                                                {
                                                    layout: 'noBorders',
                                                    margin: [5, 10],
                                                    fontSize: 12,
                                                    table: {
                                                        widths: ['*', 'auto'],
                                                        body: [
                                                            [{ text: 'Membership Plan', bold: true, margin: [20, 5, 10, 5], fontSize: 10 }, { text: "$" + this.state.Subscription.filter(subs => subs.tier === this.state.membership).map(value => Math.ceil(parseInt(value.discount) * this.state.totalCost * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor / 100).toLocaleString()), bold: true, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10 }],
                                                            [{ text: 'Member Plan', bold: false, margin: [20, 5, 10, 5], fontSize: 10 }, { text: this.state.Subscription.filter(subs => subs.tier === this.state.membership).map(value => value.name.toLocaleString()), bold: false, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10 }],
                                                            [{ text: 'Discount', bold: false, margin: [20, 5, 10, 5], fontSize: 10 }, {
                                                                text: this.state.Subscription.filter(subs => subs.tier === this.state.membership).map(value => value.discount.toLocaleString()) + "%"
                                                                , bold: false, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],
                                                            ['', ''],
                                                            [{ text: 'Duration Discount', bold: true, margin: [20, 5, 10, 5], fontSize: 10 }, {
                                                                text: "$" + (this.state.totalCost === 0 ? 0 : Math.ceil((1 - this.state.DurationSavings[this.state.duration.toLocaleString()]) * this.state.totalCost * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor).toLocaleString())
                                                                , bold: true, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],
                                                            [{ text: 'Duration', bold: false, margin: [20, 5, 10, 5], fontSize: 10 }, {
                                                                text: `${this.state.duration} week${this.state.duration > 1 ? "s" : null}`
                                                                , bold: false, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],
                                                            [{ text: 'Discount', bold: false, margin: [20, 5, 10, 5], fontSize: 10 }, {
                                                                text: Math.round((1 - this.state.DurationSavings[this.state.duration.toLocaleString()]) * 100) + "%"
                                                                , bold: false, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],
                                                            ['', ''],
                                                            [{ text: 'FTE Discount', bold: true, margin: [20, 5, 10, 5], fontSize: 10 }, {
                                                                text: "$" + (Math.ceil((this.state.baseCost - this.state.totalCost) * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor).toLocaleString())
                                                                , bold: true, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],
                                                            [{ text: 'Base Billing Rate', bold: false, margin: [20, 5, 10, 5], fontSize: 10 }, {
                                                                text: "$" + (this.state.totalHours === 0 ? 0 : Math.round(this.state.baseCost * this.state.cityFactor * this.state.locationFactor / this.state.totalHours).toLocaleString()) + "/ hr"
                                                                , bold: false, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],
                                                            [{ text: 'Adjusted Billing Rate', bold: false, margin: [20, 5, 10, 5], fontSize: 10 }, {
                                                                text: "$" + (this.state.totalHours === 0 ? 0 : Math.round(this.state.totalCost * this.state.cityFactor * this.state.locationFactor / this.state.totalHours).toLocaleString()) + "/ hr"
                                                                , bold: false, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],
                                                            [{ text: 'Base Cost', bold: false, margin: [20, 5, 10, 5], fontSize: 10 }, {
                                                                text: "$" + (Math.round(this.state.baseCost * this.state.cityFactor * this.state.locationFactor).toLocaleString())
                                                                , bold: false, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],
                                                            [{ text: 'Adjusted Cost', bold: false, margin: [20, 5, 10, 5], fontSize: 10 }, {
                                                                text: "$" + (Math.round(this.state.totalCost * this.state.cityFactor * this.state.locationFactor).toLocaleString())
                                                                , bold: false, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],
                                                            ['', ''],
                                                            [{ text: 'Total Savings', bold: true, margin: [20, 5, 10, 5], fontSize: 10 }, {
                                                                text: "$" + (Math.ceil((this.state.baseCost - this.state.totalCost) * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor).toLocaleString())
                                                                , bold: true, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],
                                                            [{ text: '', bold: true, margin: [20, 5, 10, 5], fontSize: 10 }, {
                                                                text: this.state.baseCost === 0 ? 0 : Math.round((this.state.baseCost - this.state.totalCost) / this.state.baseCost * 100).toLocaleString() + "%"
                                                                , bold: true, margin: [10, 5, 10, 5], fillColor: 'white', fontSize: 10
                                                            }],

                                                        ]
                                                    }
                                                },
                                                ]
                                            ]
                                        }
                                    }]
                                ]
                            }

                        }]
                        ]
                    }
                },


            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [10, 10, 10, 10]
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                tableExample: {
                    margin: [0, 0, 0, 15],
                    fillColor: '#f4f7fc'
                },
                tableExample2: {
                    margin: [0, 15, 0, 15],
                    fillColor: '#f9f3f7'
                },
                table: {
                    margin: [50, 50, 100, 50],
                },
                tableLevel: {
                    margin: 30,
                },
                tableLevel2: {
                    margin: [30, 0],
                },
                rightAlign: {
                    alignment: "right",
                },
                leftAlign: {
                    alignment: "left",
                },
                tableHeader: {
                    bold: true,
                    fontSize: 13,
                    color: 'black'
                }
            },
            defaultStyle: {
                // alignment: 'justify'
            }

        };
        for (let i = 0; i < Math.ceil(this.state.SeniorRole.length / 2); i++) {
            if (i * 2 + 1 === this.state.SeniorRole.length) {
                dd.content[3].table.body[0][0].table.body.push([{ text: this.state.SeniorRole[i * 2].role, alignment: 'center', }, { text: `$${this.state.SeniorRole[i * 2].selected ? this.state.SeniorRole[i * 2].rate : 0}`, alignment: 'center' }, { text: `${this.state.SeniorRole[i * 2].FTE === 0 ? 'select' : this.state.SeniorRole[i * 2].FTE}`, fillColor: 'white', color: 'black', alignment: 'center' }, { text: '', alignment: 'center' }, { text: '', alignment: 'center' }, { text: '', alignment: 'center' }],)
            }
            else {
                dd.content[3].table.body[0][0].table.body.push([{ text: this.state.SeniorRole[i * 2].role, alignment: 'center', }, { text: `$${this.state.SeniorRole[i * 2].selected ? this.state.SeniorRole[i * 2].rate : 0}`, alignment: 'center' }, { text: `${this.state.SeniorRole[i * 2].FTE === 0 ? 'select' : this.state.SeniorRole[i * 2].FTE}`, fillColor: 'white', color: 'black', alignment: 'center' }, { text: this.state.SeniorRole[i * 2 + 1].role, alignment: 'center' }, { text: `$${this.state.SeniorRole[i * 2].selected ? this.state.SeniorRole[i * 2].rate : 0}`, alignment: 'center' }, { text: `${this.state.SeniorRole[i * 2 + 1].FTE === 0 ? 'select' : this.state.SeniorRole[i * 2 + 1].FTE}`, alignment: 'center', fillColor: 'white' }],)
            }
        }
        for (let i = 0; i < Math.ceil(this.state.IntermediateRole.length / 2); i++) {
            if (i * 2 + 1 === this.state.IntermediateRole.length) {
                dd.content[5].table.body[0][0].table.body.push([{ text: this.state.IntermediateRole[i * 2].role, alignment: 'center', }, { text: `$${this.state.IntermediateRole[i * 2].selected ? this.state.IntermediateRole[i * 2].rate : 0}`, alignment: 'center' }, { text: `${this.state.IntermediateRole[i * 2].FTE === 0 ? 'select' : this.state.IntermediateRole[i * 2].FTE}`, fillColor: 'white', color: 'black', alignment: 'center' }, { text: '', alignment: 'center' }, { text: '', alignment: 'center' }, { text: '', alignment: 'center' }],)
            }
            else {
                dd.content[5].table.body[0][0].table.body.push([{ text: this.state.IntermediateRole[i * 2].role, alignment: 'center', }, { text: `$${this.state.IntermediateRole[i * 2].selected ? this.state.IntermediateRole[i * 2].rate : 0}`, alignment: 'center' }, { text: `${this.state.IntermediateRole[i * 2].FTE === 0 ? 'select' : this.state.IntermediateRole[i * 2].FTE}`, fillColor: 'white', color: 'black', alignment: 'center' }, { text: this.state.IntermediateRole[i * 2 + 1].role, alignment: 'center' }, { text: `$${this.state.IntermediateRole[i * 2].selected ? this.state.IntermediateRole[i * 2].rate : 0}`, alignment: 'center' }, { text: `${this.state.IntermediateRole[i * 2 + 1].FTE === 0 ? 'select' : this.state.IntermediateRole[i * 2 + 1].FTE}`, alignment: 'center', fillColor: 'white' }],)
            }
        }
        for (let i = 0; i < Math.ceil(this.state.JuniorRole.length / 2); i++) {
            if (i * 2 + 1 === this.state.JuniorRole.length) {
                dd.content[7].table.body[0][0].table.body.push([{ text: this.state.JuniorRole[i * 2].role, alignment: 'center', }, { text: `$${this.state.JuniorRole[i * 2].selected ? this.state.JuniorRole[i * 2].rate : 0}`, alignment: 'center' }, { text: `${this.state.JuniorRole[i * 2].FTE === 0 ? 'select' : this.state.JuniorRole[i * 2].FTE}`, fillColor: 'white', color: 'black', alignment: 'center' }, { text: '', alignment: 'center' }, { text: '', alignment: 'center' }, { text: '', alignment: 'center' }],)
            }
            else {
                dd.content[7].table.body[0][0].table.body.push([{ text: this.state.JuniorRole[i * 2].role, alignment: 'center', }, { text: `$${this.state.JuniorRole[i * 2].selected ? this.state.JuniorRole[i * 2].rate : 0}`, alignment: 'center' }, { text: `${this.state.JuniorRole[i * 2].FTE === 0 ? 'select' : this.state.JuniorRole[i * 2].FTE}`, fillColor: 'white', color: 'black', alignment: 'center' }, { text: this.state.JuniorRole[i * 2 + 1].role, alignment: 'center' }, { text: `$${this.state.JuniorRole[i * 2].selected ? this.state.JuniorRole[i * 2].rate : 0}`, alignment: 'center' }, { text: `${this.state.JuniorRole[i * 2 + 1].FTE === 0 ? 'select' : this.state.JuniorRole[i * 2 + 1].FTE}`, alignment: 'center', fillColor: 'white' }],)
            }
        }
        for (let i = 0; i < Math.ceil(this.state.Admin.length / 2); i++) {
            if (i * 2 + 1 === this.state.Admin.length) {
                dd.content[9].table.body[0][0].table.body.push([{ text: this.state.Admin[i * 2].role, alignment: 'center', }, { text: `$${this.state.Admin[i * 2].selected ? this.state.Admin[i * 2].rate : 0}`, alignment: 'center' }, { text: `${this.state.Admin[i * 2].FTE === 0 ? 'select' : this.state.Admin[i * 2].FTE}`, fillColor: 'white', color: 'black', alignment: 'center' }, { text: '', alignment: 'center' }, { text: '', alignment: 'center' }, { text: '', alignment: 'center' }],)
            }
            else {
                dd.content[9].table.body[0][0].table.body.push([{ text: this.state.Admin[i * 2].role, alignment: 'center', }, { text: `$${this.state.Admin[i * 2].selected ? this.state.Admin[i * 2].rate : 0}`, alignment: 'center' }, { text: `${this.state.Admin[i * 2].FTE === 0 ? 'select' : this.state.Admin[i * 2].FTE}`, fillColor: 'white', color: 'black', alignment: 'center' }, { text: this.state.Admin[i * 2 + 1].role, alignment: 'center' }, { text: `$${this.state.Admin[i * 2].selected ? this.state.Admin[i * 2].rate : 0}`, alignment: 'center' }, { text: `${this.state.Admin[i * 2 + 1].FTE === 0 ? 'select' : this.state.Admin[i * 2 + 1].FTE}`, alignment: 'center', fillColor: 'white' }],)
            }
        }
        for (let i = 0; i < Math.ceil(this.state.Offshore.length / 2); i++) {
            if (i * 2 + 1 === this.state.Offshore.length) {
                dd.content[11].table.body[0][0].table.body.push([{ text: this.state.Offshore[i * 2].role, alignment: 'center', }, { text: `$${this.state.Offshore[i * 2].selected ? this.state.Offshore[i * 2].rate : 0}`, alignment: 'center' }, { text: `${this.state.Offshore[i * 2].FTE === 0 ? 'select' : this.state.Offshore[i * 2].FTE}`, fillColor: 'white', color: 'black', alignment: 'center' }, { text: '', alignment: 'center' }, { text: '', alignment: 'center' }, { text: '', alignment: 'center' }],)
            }
            else {
                dd.content[11].table.body[0][0].table.body.push([{ text: this.state.Offshore[i * 2].role, alignment: 'center', }, { text: `$${this.state.Offshore[i * 2].selected ? this.state.Offshore[i * 2].rate : 0}`, alignment: 'center' }, { text: `${this.state.Offshore[i * 2].FTE === 0 ? 'select' : this.state.Offshore[i * 2].FTE}`, fillColor: 'white', color: 'black', alignment: 'center' }, { text: this.state.Offshore[i * 2 + 1].role, alignment: 'center' }, { text: `$${this.state.Offshore[i * 2].selected ? this.state.Offshore[i * 2].rate : 0}`, alignment: 'center' }, { text: `${this.state.Offshore[i * 2 + 1].FTE === 0 ? 'select' : this.state.Offshore[i * 2 + 1].FTE}`, alignment: 'center', fillColor: 'white' }],)
            }
        }
        console.log(this.state.meetingsDuration)
        return pdfMake.createPdf(dd);
    }
    openPdf() {
        this.printPdf().open();
    }
    async sendMail() {
        var servicePdf = this.printPdf();
        var serviceData = new FormData();
        servicePdf.getBlob(blob => {
            serviceData.append("servicePdf", blob);
            serviceData.append("name", this.state.serviceName);
            serviceData.append("email", this.state.serviceMail);
            serviceData.append("phone", this.state.servicePhone);
            serviceData.append("service", this.state.serviceService);
            serviceData.append("timeframe", this.state.serviceTimeFrame);
            serviceData.append("budget", this.state.serviceBudget);
            serviceData.append("best_time", this.state.serviceBestTime);
            axios({
                method: "POST",
                url: "https://dspemail.com/api/sendMail",
                data: serviceData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        });

    }
    RoundTo(number, roundto) {
        return roundto * Math.round(number / roundto);
    }
    componentWillMount() {
        this.getCsvData();
        //Fetch Services URL Doesn't exisit
        //this.fetchServices();
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    fetchCsv() {
        return fetch('/data/subs.csv').then(function (response) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            return reader.read().then(function (result) {
                return decoder.decode(result.value);
            });
        });
    }

    getData(result) {
        this.setState({ data: result.data });
    }

    async getCsvData() {
        let csvData = await this.fetchCsv();
        console.log(csvData);
        Papa.parse(csvData, {
            complete: this.getData
        });
        this.getFormData();
    }
    genTable(parsedData, tableName) {
        let role = []
        let i = 0
        if (tableName === "Subscription") {
            for (; i < parsedData.length; i++) {
                if (parsedData[i][0] !== tableName) {
                    if (parsedData[i][0].length === 0) {
                        break
                    }
                    role.push({ name: parsedData[i][0], tier: parsedData[i][1], discount: parsedData[i][2], mobilization: parsedData[i][3] })

                }
            }

            this.setState({ [tableName]: role })
            return parsedData.slice(i + 1)
        }
        else if (tableName === "Savings" || tableName === "DurationSavings") {
            let savings = {}
            for (; i < parsedData.length; i++) {
                if (parsedData[i][0] !== tableName) {
                    if (parsedData[i][0].length === 0) {
                        break
                    }
                    savings[parsedData[i][0]] = parseFloat(parsedData[i][1])

                }
            }
            console.log(savings)
            this.setState({ [tableName]: savings })
            return parsedData.slice(i + 1)
        } else if (tableName === "BaseRates") {
            let baseRate = {}
            console.log("PARSE BASE RATES");
            console.log(parsedData);
            for (; i < parsedData.length; i++) {
                if (parsedData[i][0] !== tableName) {
                    if (parsedData[i][0].length === 0) {
                        break
                    }
                    baseRate[parsedData[i][0]] = { rate: parseFloat(parsedData[i][1]), mul: parseInt(parsedData[i][2]) }

                }
            }
            console.log(baseRate)
            this.setState({ BaseRates: baseRate })
            return parsedData.slice(i + 1)
        } else if (tableName === "Location") {
            for (; i < parsedData.length; i++) {
                if (parsedData[i][0] !== tableName) {
                    if (parsedData[i][0].length === 0) {
                        break
                    }
                    role.push({ location: parsedData[i][0], indicator: parsedData[i][1], factor: parsedData[i][2] })
                }
            }
            let table = {}
            table[tableName] = role
            this.setState(table)
            return parsedData.slice(i + 1)
        } else {
            for (; i < parsedData.length; i++) {
                if (parsedData[i][0] !== tableName) {
                    if (parsedData[i][0].length === 0) {
                        break
                    }
                    role.push({ role: parsedData[i][0], rate: parsedData[i][1], FTE: 0, selected: false, calculatedRate: 0 })
                }
            }
            let table = {}
            table[tableName] = role
            this.setState(table)
            return parsedData.slice(i + 1)
        }
    }
    updateDropDown(table, show) {
        console.log(this.state[table])
        this.setState({ [table]: show })
    }
    updateFTE(role, index, val) {
        let valStr = val
        val = parseFloat(val)
        let roleData = this.state[role]
        if (val !== 0) {
            roleData[index].selected = true
        }
        else {
            roleData[index].selected = false
        }
        let totalHours = this.state.totalHours
        let totalCost = this.state.totalCost
        let baseCost = this.state.baseCost
        totalHours -= roleData[index].FTE * 40
        totalCost -= roleData[index].FTE * 40 * roleData[index].calculatedRate
        baseCost -= roleData[index].FTE * 40 * roleData[index].rate
        console.log("BASE RATES ROLE");
        console.log(this.state.BaseRates[role]);
        roleData[index].calculatedRate = this.RoundTo(roleData[index].rate * this.state.Savings[valStr], this.state.BaseRates[role].mul)
        totalHours += val * 40
        totalCost += val * 40 * roleData[index].calculatedRate
        baseCost += val * 40 * roleData[index].rate
        roleData[index].FTE = val
        this.setState({ [role]: roleData, totalCost: totalCost, totalHours: totalHours, baseCost: baseCost })
    }
    changeDuration(val) {
        this.setState({ duration: val })
    }
    getFormData() {
        let parsedData = this.state.data
        parsedData = this.genTable(parsedData, "SeniorRole")
        parsedData = this.genTable(parsedData, "IntermediateRole")
        parsedData = this.genTable(parsedData, "JuniorRole")
        parsedData = this.genTable(parsedData, "Admin")
        parsedData = this.genTable(parsedData, "Offshore")
        parsedData = this.genTable(parsedData, "Location")
        parsedData = this.genTable(parsedData, "CityDensity")
        parsedData = this.genTable(parsedData, "Subscription")
        parsedData = this.genTable(parsedData, "OfficeSize")
        parsedData = this.genTable(parsedData, "Savings")
        parsedData = this.genTable(parsedData, "DurationSavings")
        parsedData = this.genTable(parsedData, "BaseRates")
        console.log('PARSED DATA');
        console.log(parsedData);
    }


    render() {
        return (
            <>
                <div className="container-large" ref={this.printRef}>
                    <div className="calc-top"></div>
                    <div className="groups groups-calc">
                        <div className="main-container">
                            <div className="my-1 text-center">
                                <div className="panel-calc dredBg white boldText">Estimate Your Flex Staff Costs</div>
                                <p className="text width90">Check out our Flex Staff Calculator to estimate the costs of your next project team. Tell us a little about your location, select your anticipated roles, optimize your time frame, and let us help you consider ways to save time and money along the way. We want to help you "start smart" so you can "finish strong" with DSP at your side.</p>
                                <div className="panel-calc darkBlueBg white boldText"> Location Factor & Membership Plan</div>
                                <div className="calc-padding lightBlueBg">
                                    <form className="form-horizontal ">
                                        <div className="form-group">
                                            <label for="corecity" className="col-xs-4 control-label boldText">Core City</label>
                                            <div className="col-xs-8 col-md-4 dropdown-select">
                                                <select className={"form-control" + (this.state.cityFactor !== 0 ? " border-green" : "")} onChange={(e) => { this.setState({ cityFactor: e.target.value, city: e.target.options[e.target.selectedIndex].text }) }}>
                                                    {this.state.Location.map((value) => {
                                                        return <option value={value.factor}>{value.location}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="location" className="col-xs-4 control-label boldText">Location</label>
                                            <div className="col-xs-8 col-md-4 dropdown-select">
                                                <select className={"form-control" + (this.state.locationFactor !== 0 ? " border-green" : "")} onChange={(e) => this.setState({ locationFactor: e.target.value, location: e.target.options[e.target.selectedIndex].text })}>
                                                    {this.state.CityDensity.map((value) => {
                                                        return <option value={value.rate}>{value.role}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="location" className="col-xs-4 control-label boldText">Membership</label>
                                            <div className="col-xs-8 col-md-4 dropdown-select">
                                                <select className={"form-control" + (this.state.membership !== 0 ? " border-green" : "")} defaultValue={this.state.membership} onChange={(e) => this.setState({ membership: e.target.value, member: e.target.options[e.target.selectedIndex].text })}>
                                                    {this.state.Subscription.map((value) => {
                                                        return <option value={value.tier}>{value.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="location" className="col-xs-4 control-label boldText">Office Size</label>
                                            <div className="col-xs-8 col-md-4 dropdown-select">
                                                <select className={"form-control" + (this.state.officeFactor !== 0 ? " border-green" : "")} defaultValue={this.state.officeFactor} onChange={(e) => this.setState({ officeFactor: e.target.value, office: e.target.options[e.target.selectedIndex].text })}>
                                                    {this.state.OfficeSize.map((value) => {
                                                        return <option value={parseFloat(value.rate)}>{value.role}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                                <DropDown updateFTECallback={this.updateFTE} updateDropDown={this.updateDropDown} title="Senior Level Designers" dropDownName="showSR" dataTable="SeniorRole" colorScheme="green-content" titleColor="green-title" showData={this.state.showSR} data={this.state.SeniorRole} ></DropDown>
                                <DropDown updateFTECallback={this.updateFTE} updateDropDown={this.updateDropDown} title="Intermediate Level Designers" dropDownName="showIM" dataTable="IntermediateRole" colorScheme="yellow-content" titleColor="yellow-title" showData={this.state.showIM} data={this.state.IntermediateRole} ></DropDown>
                                <DropDown updateFTECallback={this.updateFTE} updateDropDown={this.updateDropDown} title="Junior Level Designers" dropDownName="showJR" dataTable="JuniorRole" colorScheme="red-content" titleColor="red-title" showData={this.state.showJR} data={this.state.JuniorRole} ></DropDown>
                                <DropDown updateFTECallback={this.updateFTE} updateDropDown={this.updateDropDown} title="Administrative Staff" dropDownName="showAdmin" dataTable="Admin" colorScheme="orange-content" titleColor="orange-title" showData={this.state.showAdmin} data={this.state.Admin} ></DropDown>
                                <DropDown updateFTECallback={this.updateFTE} updateDropDown={this.updateDropDown} title="Off-Shore Staff" dropDownName="showOffShore" dataTable="Offshore" colorScheme="dark-yellow-content" titleColor="dark-yellow-title" showData={this.state.showOffShore} data={this.state.Offshore} ></DropDown>
                                <div className="my-1 text-center">
                                    <div className="panel-calc blueBg white boldText  pointer calc-grid" onClick={() => this.setState({ showDuration: !this.state.showDuration })}> Duration (weeks) {this.state.showDuration ? <span className="white glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span className="white glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</div>
                                    {this.state.showDuration ?
                                        <div className="text offWhite">
                                            <div className="slidecontainer my-1">
                                                <input type="range" min="2" max="18" step="2" className="slider" id="durationinweek" list="tickmarks" defaultValue={this.state.duration} onChange={(e) => this.changeDuration(e.target.value)} />
                                                <div className="testLabels">
                                                    <div className="labels boldText">2</div>
                                                    <div className="labels boldText">4</div>
                                                    <div className="labels boldText">6</div>
                                                    <div className="labels boldText">8</div>
                                                    <div className="labels boldText">10</div>
                                                    <div className="labels boldText">12</div>
                                                    <div className="labels boldText">14</div>
                                                    <div className="labels boldText">16</div>
                                                    <div className="labels boldText">18+</div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                                <div className="my-1 text-center">
                                    <div className="panel-calc blueBg white boldText  pointer calc-grid" onClick={() => this.setState({ showMeeting: !this.state.showMeeting })}> Meeting Calculator {this.state.showMeeting ? <span className="white glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span className="white glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</div>
                                    {this.state.showMeeting ?
                                        <div className="text offWhite">
                                            <p className=" text-center"> Cost Per Meeting :
                                            <span className="boldText"> ${Math.ceil(this.state.meetingsDuration * this.state.totalCost * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor).toLocaleString()}</span></p>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p className="my-1 text text-center boldText"> Weekly Meetings</p>
                                                    <div className="slidecontainer  my-1">
                                                        <input type="range" min="0" max="3" step="1" className="slider" id="durationinweek" list="durationTickmarks" defaultValue={this.state.weeklyMeetings} onChange={(e) => this.setState({ weeklyMeetings: e.target.value })} />
                                                        <div className="testLabels">
                                                            <div className="labelers">0</div>
                                                            <div className="labelers">1</div>
                                                            <div className="labelers">2</div>
                                                            <div className="labelers">3</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <p className="my-1 text text-center boldText"> Meeting Durations (Hrs)</p>
                                                    <div className="slidecontainer my-1">
                                                        <input type="range" min="0.5" max="2" step="0.5" className="slider" id="durationinweek" defaultValue={this.state.meetingsDuration} onChange={(e) => this.setState({ meetingsDuration: e.target.value })} />
                                                        <div className="testLabels">
                                                            <div className="labelers">0.5</div>
                                                            <div className="labelers">1.0</div>
                                                            <div className="labelers">1.5</div>
                                                            <div className="labelers">2.0</div>
                                                        </div>


                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                        : null}
                                </div>
                            </div>
                            <div id="sidenav" className={'sidenav my-1'}>
                                <div className="side-grid">
                                    <div className="grid-items-calc grid-items-start">
                                        <div className="calc-header">
                                            <img src={logo} alt="logo" className="navLogo" />
                                            <div className="calc-header-items">
                                                <p className="padding-right">Hours</p>
                                                <p>|</p>
                                                <p className="padding-right">Costs</p>
                                                <p>|</p>
                                                <p className="padding-right">Savings</p>
                                            </div>
                                        </div>
                                        <h1 className="panel-calc panel-calc-2 darkBlueBg white boldText text-center"> Total Hours & Costs</h1>
                                        <div className="panel-body table-text">

                                            <div className="grid-right">
                                                <div className="boldText">Total Hours</div>
                                                <div className="pyforce border-2 whiteBg padding-right-2 normal boldText">{(this.state.totalHours * this.state.duration).toLocaleString()}</div>


                                                <div className="boldText">Total Cost</div>

                                                <div className="pyforce border-2 whiteBg padding-right-2 normal boldText">${Math.ceil((this.state.totalCost * this.state.duration + parseInt(this.state.Subscription.filter(subs => subs.tier === this.state.membership).map(value => value.mobilization)) + parseInt(this.state.meetingsDuration * this.state.totalCost * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor * this.state.weeklyMeetings * this.state.duration))).toLocaleString()}
                                                </div>


                                            </div>

                                            <div className="flex-right min-width pointer" onClick={() => this.setState({ showTotalDetails: !this.state.showTotalDetails })}><div className="ared" >
                                                Click for Cost Breakdown </div> {this.state.showTotalDetails ? <span className="redColor ared-2 glyphicon glyphicon-chevron-up" aria-hidden="true"> </span> : <span className="redColor ared-2 glyphicon glyphicon-chevron-down" aria-hidden="true"> </span>}
                                            </div>
                                        </div>
                                    </div>

                                    {this.state.showTotalDetails ?
                                        <div className="side-grid">
                                            <div className="grid-items-calc">
                                                <div className="panel-body">
                                                    <div className="grid-right table-text">
                                                        <div className="">Mobilization Fee</div>
                                                        <div className="pyforce border-2 whiteBg padding-right-2 normal">${this.state.Subscription.filter(subs => subs.tier === this.state.membership).map(value => {
                                                            console.log(value)
                                                            return Math.ceil(value.mobilization * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor).toLocaleString()
                                                        })}</div>
                                                        <div className="">Cost of Meetings</div>
                                                        <div className="pyforce border-2 whiteBg padding-right-2 normal">${Math.ceil(this.state.meetingsDuration * this.state.totalCost * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor * this.state.weeklyMeetings * this.state.duration).toLocaleString()}</div>
                                                        <div className="">Weekly Cost</div>
                                                        <div className="pyforce border-2 whiteBg padding-right-2 normal">${Math.ceil(this.state.totalCost * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor).toLocaleString()}</div>
                                                        <div className="">Min Weekly Burn Rate</div>
                                                        <div className="pyforce border-2 whiteBg padding-right-2 normal">${Math.ceil(this.state.totalCost / 2 * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor).toLocaleString()}</div>
                                                        <div className="">Min Hours Per Week</div>
                                                        <div className="pyforce border-2 whiteBg padding-right-2 normal">{(this.state.totalHours / 2).toLocaleString()} Hrs</div>
                                                        <div className="">Max Weekly Burn Rate</div>
                                                        <div className="pyforce border-2 whiteBg padding-right-2 normal">${Math.ceil(this.state.totalCost * 2 * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor).toLocaleString()}</div>
                                                        <div className="">Max Hours Per Week</div>
                                                        <div className="pyforce border-2 whiteBg padding-right-2 normal">{(this.state.totalHours * 2).toLocaleString()} Hrs</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        null}

                                    <div className="side-grid">
                                        <div className="grid-items-calc">
                                            <h1 className="panel-calc panel-calc-2 darkBlueBg white boldText text-center"> Savings</h1>
                                            <div className="panel-body table-text">

                                                <div className="grid-right">
                                                    <div className="boldText">Membership Plan</div>
                                                    <div className="pyforce border-2 whiteBg padding-right-2 normal boldText">${this.state.Subscription.filter(subs => subs.tier === this.state.membership).map(value => Math.ceil(parseInt(value.discount) * this.state.totalCost * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor / 100).toLocaleString())}</div>
                                                </div>

                                                <div className="flex-right min-width pointer" onClick={() => this.setState({ showMembershipSavings: !this.state.showMembershipSavings })}><div className="ared" >
                                                    Click for Membership Plan Breakdown </div> {this.state.showMembershipSavings ? <span className="redColor ared-2 glyphicon glyphicon-chevron-up" aria-hidden="true"> </span> : <span className="redColor ared-2 glyphicon glyphicon-chevron-down" aria-hidden="true"> </span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.showMembershipSavings ?
                                        <div className="side-grid">
                                            <div className="grid-items-calc">
                                                <div className="panel-body">
                                                    <div className="grid-right table-text">
                                                        <div className="">Member Plan</div>
                                                        <div className="pyforce border-2 whiteBg padding-right-2 normal">{this.state.Subscription.filter(subs => subs.tier === this.state.membership).map(value => value.name.toLocaleString())}</div>
                                                        <div className="">Discount</div>
                                                        <div className="pyforce border-2 whiteBg padding-right-2 normal">{this.state.Subscription.filter(subs => subs.tier === this.state.membership).map(value => value.discount.toLocaleString())}%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        null}
                                    <div className="side-grid">
                                        <div className="grid-items-calc">

                                            <div className="panel-body table-text">

                                                <div className="grid-right">
                                                    <div className="boldText">Duration Discount</div>
                                                    <div className="pyforce border-2 whiteBg padding-right-2 normal boldText">${this.state.totalCost === 0 ? 0 : Math.ceil((1 - this.state.DurationSavings[this.state.duration.toLocaleString()]) * this.state.totalCost * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor).toLocaleString()}</div>
                                                </div>

                                                <div className="flex-right min-width pointer" onClick={() => this.setState({ showDurationSavings: !this.state.showDurationSavings })}><div className="ared" >
                                                    Click for duration discount Breakdown </div> {this.state.showDurationSavings ? <span className="redColor ared-2 glyphicon glyphicon-chevron-up" aria-hidden="true"> </span> : <span className="redColor ared-2 glyphicon glyphicon-chevron-down" aria-hidden="true"> </span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.showDurationSavings ?
                                        <div className="side-grid">
                                            <div className="grid-items-calc">
                                                <div className="panel-body">
                                                    <div className="grid-right table-text">
                                                        <div className="">Duration</div>
                                                        <div className="pyforce border-2 whiteBg padding-right-2 normal">{this.state.duration} week{this.state.duration > 1 ? "s" : null}</div>
                                                        <div className="">Discount</div>
                                                        <div className="pyforce border-2 whiteBg padding-right-2 normal">{Math.round((1 - this.state.DurationSavings[this.state.duration.toLocaleString()]) * 100)}%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        null}
                                    <div className="side-grid">
                                        <div className="grid-items-calc">

                                            <div className="panel-body table-text">

                                                <div className="grid-right">
                                                    <div className="boldText">FTE Discount</div>
                                                    <div className="pyforce border-2 whiteBg padding-right-2 normal boldText">${Math.ceil((this.state.baseCost - this.state.totalCost) * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor).toLocaleString()}</div>
                                                </div>

                                                <div className="flex-right min-width pointer" onClick={() => this.setState({ showFTEDiscount: !this.state.showFTEDiscount })}><div className="ared" >
                                                    Click for FTE discount Breakdown </div> {this.state.showFTEDiscount ? <span className="redColor ared-2 glyphicon glyphicon-chevron-up" aria-hidden="true"> </span> : <span className="redColor ared-2 glyphicon glyphicon-chevron-down" aria-hidden="true"> </span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.showFTEDiscount ?
                                        <div className="side-grid">
                                            <div className="grid-items-calc">
                                                <div className="panel-body">
                                                    <div className="grid-right table-text">
                                                        <div className="">Base Billing Rate</div>
                                                        <div className="pyforce border-2 whiteBg padding-right-2 normal">${this.state.totalHours === 0 ? 0 : Math.round(this.state.baseCost * this.state.cityFactor * this.state.locationFactor / this.state.totalHours).toLocaleString()} per hour</div>
                                                        <div className="">Adjusted Billing Rate</div>
                                                        <div className="pyforce border-2 whiteBg padding-right-2 normal">${this.state.totalHours === 0 ? 0 : Math.round(this.state.totalCost * this.state.cityFactor * this.state.locationFactor / this.state.totalHours).toLocaleString()} per hour</div>
                                                        <div className="">Base Cost</div>
                                                        <div className="pyforce border-2 whiteBg padding-right-2 normal">${Math.round(this.state.baseCost * this.state.cityFactor * this.state.locationFactor).toLocaleString()}</div>
                                                        <div className="">Adjusted Cost</div>
                                                        <div className="pyforce border-2 whiteBg padding-right-2 normal">${Math.round(this.state.totalCost * this.state.cityFactor * this.state.locationFactor).toLocaleString()}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        null}
                                    <div className="side-grid">
                                        <div className="grid-items-calc">

                                            <div className="panel-body table-text">

                                                <div className="grid-right">
                                                    <div className="boldText">Total Savings</div>
                                                    <div className="pyforce border-2 whiteBg padding-right-2 normal boldText">${Math.ceil((this.state.baseCost - this.state.totalCost) * this.state.cityFactor * this.state.locationFactor * this.state.officeFactor).toLocaleString()}</div>
                                                    <div className="boldText"></div>
                                                    <div className="pyforce border-2 whiteBg padding-right-2 normal boldText">{this.state.baseCost === 0 ? 0 : Math.round((this.state.baseCost - this.state.totalCost) / this.state.baseCost * 100).toLocaleString()}%</div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="side-grid">
                                        <div className="grid-items-calc grid-items-end">
                                            <div className={"text-center panel-calc panel-calc-2 redBg white boldText pointer calc-grid"} onClick={() => this.setState({ showService: !this.state.showService })}> <div className="white">Request Service</div>
                                                <div>{this.state.showService ? <span className="white glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span className="white glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</div></div>
                                        </div>
                                    </div>
                                    {this.state.showService ?
                                        <div className="side-grid">
                                            <div className="grid-items-calc">
                                                <div className="panel-body">
                                                    <div className="grid-service table-text">
                                                        <div className="">Name</div>
                                                        <input type="text" value={this.state.serviceName} onChange={(e) => { this.setState({ serviceName: e.target.value }) }} className="border-blue py-1 whiteBg pyforce my-1" />
                                                    </div>
                                                    <div className="grid-service table-text">
                                                        <div className="">E-mail address</div>
                                                        <input type="email" value={this.state.serviceMail} required={this.state.serviceMethod === "email" ? true : false} onChange={(e) => { this.setState({ serviceMail: e.target.value }) }} className="border-blue py-1 whiteBg pyforce my-1" />
                                                    </div>
                                                    <div className="grid-service table-text">
                                                        <div className="">Phone Number</div>
                                                        <input type="tel" value={this.state.servicePhone} required={this.state.serviceMethod === "phone" ? true : false} onChange={(e) => { this.setState({ servicePhone: e.target.value }) }} className="border-blue py-1 whiteBg pyforce my-1" />
                                                    </div>
                                                    <div className="grid-service table-text">
                                                        <div className="">Service Request</div>
                                                        <select className={"border-blue py-1 whiteBg pyforce my-1"} defaultValue={this.state.serviceTimeFrame} onChange={(e) => this.setState({ serviceTimeFrame: e.target.value })}>
                                                            {this.state.serviceList.map(e => {
                                                                return (<option value={e.value}>{e.value}</option>)
                                                            })
                                                            }


                                                        </select>
                                                    </div>
                                                    <div className="grid-service table-text">
                                                        <div className="">Design Budget</div>
                                                        <input type="text" value={this.state.serviceBudget} onChange={(e) => { this.setState({ serviceBudget: e.target.value }) }} className="border-blue py-1 whiteBg pyforce my-1" />
                                                    </div>
                                                    <div className="grid-service table-text">
                                                        <div className="">Timeframe to completion</div>
                                                        <select className={"border-blue py-1 whiteBg pyforce my-1"} defaultValue={this.state.serviceTimeFrame} onChange={(e) => this.setState({ serviceTimeFrame: e.target.value })}>
                                                            <option value="3 days">3 days</option>
                                                            <option value="7 days">7 days</option>
                                                            <option value="30 days">30 days</option>
                                                            <option value=">30 days">{'>'}30 days</option>

                                                        </select>
                                                    </div>
                                                    <div className="grid-right table-text">
                                                        <div className="boldText">Best time to connect</div>
                                                        <select className={"pyforce border-blue"} defaultValue={this.state.serviceMethod} onChange={(e) => this.setState({ serviceMethod: e.target.value })}>
                                                            <option value="Morning">Morning</option>
                                                            <option value="Afternoon">Afternoon</option>
                                                            <option value="Evening">Evening</option>

                                                        </select>

                                                    </div>
                                                    <div className="grid-right table-text">
                                                        <div className="boldText">Contact Method</div>
                                                        <select className={"pyforce border-blue"} defaultValue={this.state.serviceMethod} onChange={(e) => this.setState({ serviceMethod: e.target.value })}>
                                                            <option value="email">E-mail</option>
                                                            <option value="phone">Phone</option>

                                                        </select>

                                                    </div>
                                                    <div className={"text-center panel-calc panel-calc-2 redBg white boldText pointer"} onClick={this.sendMail}> <div className="white">Submit Request</div></div>
                                                    <div className={"text-center panel-calc panel-calc-2 my-1 redBorder pointer"} onClick={this.openPdf}> <div className="redColor">Print Estimate</div></div>

                                                </div>
                                            </div>
                                        </div>
                                        :
                                        null}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Calculator;
