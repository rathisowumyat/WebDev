import {Widget} from '../models/widget.model.client';

export const WIDGETS: Widget[] = [
  new Widget(  '123',  'HEADING',  '321',  '2',  'GIZMODO'),
  new Widget(  '234',  'HEADING',  '321',  '4',  'Lorem ipsum'),
  new Widget(  '345',  'IMAGE',  '321',  '1', 'text', '100%',
    'http://lorempixel.com/400/200/'),
  new Widget(  '456',  'HTML',  '321',  '1', '<p>Lorem ipsum</p>'),
  new Widget(  '567',  'HEADING',  '321',  '4',  'Lorem ipsum'),
  new Widget(  '678',  'YOUTUBE',  '321',  '1', 'text', '100%',
    'https://youtu.be/AM2Ivdi9c4E' ),
  new Widget(  '789',  'HTML',  '321',  '<p>Lorem ipsum</p>')
];