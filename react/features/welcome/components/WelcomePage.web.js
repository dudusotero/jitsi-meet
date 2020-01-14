/* global interfaceConfig */

import React from 'react';

import { translate } from '../../base/i18n';
import { connect } from '../../base/redux';

import { AbstractWelcomePage, _mapStateToProps } from './AbstractWelcomePage';

/**
 * The Web container rendering the welcome page.
 *
 * @extends AbstractWelcomePage
 */
class WelcomePage extends AbstractWelcomePage {

    /**
     * Close window after 5 seconds.
     *
     * @inheritdoc
     * @returns {void}
     */
    closeWindowAfter5Seconds() {
        setTimeout(() => {
            window && window.close();
        }, 5000);
    }

    /**
     * Implements React's {@link Component#componentDidMount()}. Invoked
     * immediately after this component is mounted.
     *
     * @inheritdoc
     * @returns {void}
     */
    componentDidMount() {
        super.componentDidMount();

        document.body.classList.add('welcome-page');
        document.title = interfaceConfig.APP_NAME;

        this.closeWindowAfter5Seconds();
    }

    /**
     * Removes the classname used for custom styling of the welcome page.
     *
     * @inheritdoc
     * @returns {void}
     */
    componentWillUnmount() {
        super.componentWillUnmount();

        document.body.classList.remove('welcome-page');
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement|null}
     */
    render() {
        return (
            <div
                className = 'welcome without-content'
                id = 'welcome_page'>
                <div className = 'header'>
                    <div
                        className = 'header-image'>
                        <img
                            className = 'logo'
                            src = 'images/logo-deep-linking.png' />
                    </div>
                    <div className = 'header-text'>
                        <h1 className = 'header-text-title'>
                            Welcome to the SMASH Meet Server
                        </h1>
                        <p className = 'header-text-description'>
                            If you were invited to a conference with a SMASH user, you can enter at the conference
                            pasting the entire link on the browser's address bar.
                        </p>
                        <p className = 'header-text-description'>
                            Thank's for the visit.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default translate(connect(_mapStateToProps)(WelcomePage));
