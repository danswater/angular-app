'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe( 'Contact App', function() {

  describe( 'Contact List View', function () {
    browser.get( 'dev.html' );
  } );

  it ( 'should redirect dev.html to dev.html#/phones', function () {
    browser.get( 'dev.html' );
    browser.getLocationAbsUrl().then( function ( url ) {
      expect( url.split( '#' )[ 1 ] ).toBe( '/contacts' );
    } );
  } );

  it ('should filter the contact list as user types into the search box', function() {

    var contactList = element.all( by.repeater( 'contact in contacts' ) );
    var query = element( by.model( 'query' ) );

    expect( contactList.count() ).toBe( 8 );

    query.sendKeys( 'Alice' );
    expect( contactList.count() ).toBe( 1 );

    query.clear();
    query.sendKeys( 'B' );
    expect( contactList.count() ).toBe( 4 );
  });

});
