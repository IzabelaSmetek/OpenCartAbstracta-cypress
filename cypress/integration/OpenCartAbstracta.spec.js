describe('OpenCartAbstracta demo tests', () =>

    it('TC0023 Main page', () => {
       cy.visit('http://opencart.abstracta.us/index.php?route=common/home')

    }),

    /*it('no test case', () => {
        //main page
        cy.visit('http://opencart.abstracta.us/index.php?route=common/home')
        //
        cy.get('#content > div.row > div:nth-child(2) > div > div.caption > h4 > a').should('have.css', 'color', 'rgb(35, 161, 209)');
        cy.get('#content > div.row > div:nth-child(2) > div > div.caption > h4 > a').trigger('mouseover').should('be.colored', 'rgb(35, 161, 209)');

        
    }),*/

    it('[W/o hover] Go to featured product page', () => {
        //main page
        cy.visit('http://opencart.abstracta.us/index.php?route=common/home')
        //click the product title
        cy.get('#content > div.row > div:nth-child(2) > div > div.caption > h4 > a').click()
        //check if the new page is the product page
        cy.url().should('eq', 'http://opencart.abstracta.us/index.php?route=product/product&product_id=40')
    }),

    it('[w/o hover] Enter main gallery photo', () => {
        //product page
        cy.visit('http://opencart.abstracta.us/index.php?route=product/product&product_id=42')
        //click photo
        cy.get('#content > div > div.col-sm-8 > ul.thumbnails > li:nth-child(1) > a > img').click()
        //check if the photo is now full screen
        cy.get('body > div.mfp-wrap.mfp-gallery.mfp-close-btn-in.mfp-auto-cursor.mfp-ready > div > div.mfp-content > div > figure > img')
    }),

    it('[w/o hover] Click another section', () => {
        //product page
        cy.visit('http://opencart.abstracta.us/index.php?route=product/product&product_id=43')
        //click section
        cy.get('#content > div > div.col-sm-8 > ul.nav.nav-tabs > li:nth-child(2) > a').click()
    }),

    it('[w/o hover] Submit a correct review', () => {
        //product page
        cy.visit('http://opencart.abstracta.us/index.php?route=product/product&product_id=43')
        //click section review
        cy.get('#content > div > div.col-sm-8 > ul.nav.nav-tabs > li:nth-child(3) > a').click()
        //enter correct name
        cy.get('#input-name').type('Test Name')
        //unnecessary? click inside the review field
        //insert correct number of characters
        cy.get('#input-review').type('Test review longer than 25 characters and shorter than 1000 characters')
        //click rating
        cy.get('#form-review > div:nth-child(5) > div > input[type=radio]:nth-child(3)').click()
        //click "continue"
        cy.get('#button-review').click()
        //check success message
        cy.get('#form-review > div.alert.alert-success')
    }),

    it('Check if there is no wishlist tooltip without hover', () => {
        cy.visit('http://opencart.abstracta.us/index.php?route=product/product&product_id=43')
        cy.get('#content > div > div.col-sm-4 > div.btn-group > button:nth-child(1)')
            .eq(0).invoke('show')
            .wait(1000)
            .should('not.have.attr','aria-describedby')

    }),

    it('[w/o hover] Add product to favourites while not logged in', () => {
        //go to product page
        cy.visit('http://opencart.abstracta.us/index.php?route=product/product&product_id=43')
        //hover over wish list icon
        //check there's no tool tip
        //check the tool tip 
        cy.get('#content > div > div.col-sm-4 > div.btn-group > button:nth-child(1)')
        .eq(0).invoke('show')
        .trigger('mouseover')
        .wait(1000)
        .should('have.attr','aria-describedby')
        //click wish list icon
        cy.click('#content > div > div.col-sm-4 > div.btn-group > button:nth-child(1)')
        //check if there's success message
        cy.get('body > div:nth-child(4) > div.alert.alert-success')
        
        
        
    }),

    it('there is no success', () => {
        cy.visit('http://opencart.abstracta.us/index.php?route=product/product&product_id=43')
        cy.get('[class="alert-success"]').should('not.exist')
    }),


    /*
    it('[w/o hover] Use login button in header', () => {
        //main page

        //hover over my account button

        //click my account

        //hover over login

        //click login


    }), */

/*

    it('TC0031 Go to feautred product page', () => {
        //main page
        cy.visit('http://opencart.abstracta.us/index.php?route=common/home')
        //hover over featured product title - check element if it changes on hover 
        cy.get('#content > div.row > div:nth-child(2) > div > div.caption > h4 > a').trigger('mouseover').to.include('-webkit-tap-highlight-color')
        //click the product title
        cy.get('#content > div.row > div:nth-child(2) > div > div.caption > h4 > a').click()
        //check if the new page is the product page
        cy.url().should('eq', 'http://opencart.abstracta.us/index.php?route=product/product&product_id=42')
    }),

    it('TC0024 Enter main gallery photo', () => {
        //product page
        cy.visit('http://opencart.abstracta.us/index.php?route=product/product&product_id=42')
        //hover over photo - check if it changes on hover
        cy.get('#content > div > div.col-sm-8 > ul.thumbnails > li:nth-child(1) > a > img').trigger('mouseover').to.include('-webkit-tap-highlight-color')
        //click photo
        cy.get('#content > div > div.col-sm-8 > ul.thumbnails > li:nth-child(1) > a > img').click()
        //check if the photo is now full screen
        cy.get('body > div.mfp-wrap.mfp-gallery.mfp-close-btn-in.mfp-auto-cursor.mfp-ready > div > div.mfp-content > div > figure > img')
    }),

    it('TC0026 Switch sections desciption/reviews', () => {
        //product page
        cy.visit('http://opencart.abstracta.us/index.php?route=product/product&product_id=43')
        //hover over section - check if highlighted 
        cy.get('#content > div > div.col-sm-8 > ul.nav.nav-tabs > li:nth-child(2) > a').trigger('mouseover').to.include(?)
        //click section
        cy.get('#content > div > div.col-sm-8 > ul.nav.nav-tabs > li:nth-child(2) > a').click()
        //check if the new tab is now active
        cy.get
    })

    it('TC0027 Submit a correct review', () => {
        //product page
        cy.visit('http://opencart.abstracta.us/index.php?route=product/product&path=24&product_id=28')
        //click review page
        cy.get('#content > div > div.col-sm-8 > ul.nav.nav-tabs > li.active > a').click()
        //click inside name field

        //enter correct name

        //click inside the review field

        //insert correct number of characters

        //click rating

        //click "continue"
    })


    it('TC0032 Add product to favourites while not logged in', () => {
        //go to product page

        //hover over wish list icon

        //check the tool tip 

        //click wish list icon
    })

    it('TC0035 Use login button in header', () => {
        //main page

        //hover over my account button

        //click my account

        //hover over login

        //click login
    })

    it('TC0038 Change currency on the main page', () => {
        //main page

        //hover over currency

        //click currency

        //hover over chosen currency

        //click currency

        //check if currency in featured changed

        //click on a product

        //check currency in product page
    })

    it('TC0002 Go to category page via nav bar', () => {
        //main page

        //hover over category in nav bar

        //click chosen category
    })

    it('TC0044 Log in with correct credentials', () => {
        //login page

        //click in email address

        //enter correct guest@mailinator.com

        //click password

        //enter password abc123

        //click login
    })

    */
)