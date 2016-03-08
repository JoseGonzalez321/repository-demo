'using strict';

import RssFeedEmitter from '../../src/rss-feed-emitter.js';
import chai from 'chai';

let expect = chai.expect;

describe( 'RssFeedEmitter ( unit )', () => {
  describe( 'when instantiated', () => {
    let feeder = new RssFeedEmitter();

    it( 'should return an Object', () => {
      expect(feeder).to.be.an( 'object' );
    } );

  } );

  describe( '#add', () =>{
    let feeder = new RssFeedEmitter();

    it( 'should be a function', () => {
      expect( feeder.add).to.be.a( 'function' );
    } );

    it ( 'should return "add" string ', () => {
      expect( feeder.add() ).to.eql( 'add' );
    })
  } );

  describe( '#emit', () => {
    let feeder = new RssFeedEmitter();

    it( 'should be a function', () => {
      expect( feeder.emit).to.be.a( 'function' );
    } );

  } );

  describe( '#on', () => {
    let feeder = new RssFeedEmitter();

    it ( 'should be a function', () => {
      expect(feeder.on).to.be.a( 'function' );
    } );

  } );

  describe( '#list', () => {
    let feeder = new RssFeedEmitter();

    it( 'should be a function', () => {
      expect(feeder.list).to.be.a( 'function' );
    } );

    it( 'should return "list" string', () => {
      expect( feeder.list() ).to.eql( 'list' );
    } );
  } );

  describe( '#remove', () => {
    let feeder = new RssFeedEmitter();

    it ( 'should be a function', () => {
      expect(feeder.remove).to.be.a( 'function' );
    } );

    it( 'should return "remove" string', () => {
      expect( feeder.remove() ).to.eql('remove');
    });
  } );

  describe( '#destroy', () => {
    let feeder = new RssFeedEmitter();

    it ( 'should be a function', () => {
      expect(feeder.destroy).to.be.a( 'function' );
    } );

    it ('should return "destroy" string', () => {
      expect(feeder.destroy()).to.eql('destroy');
    });
  } );

} );
