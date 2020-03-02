package com.ominext.entities;

import static javax.persistence.GenerationType.IDENTITY;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.UniqueConstraint;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@Entity
@Table(name = "users")
public class User implements java.io.Serializable {

    private static final long serialVersionUID = 1L;
    private Integer id;
    private String username;
    private String fullname;
    private String password;
    private String timecreated;
    private String createdby;
    private Boolean enabled;
    private Set<UsersRoles> usersRoleses = new HashSet<UsersRoles>(0);

    public User() {
    }

    public User(final String username, final String password, final Boolean enabled,
                final Set<UsersRoles> usersRoleses) {
        this.username = username;
        this.password = password;
        this.enabled = enabled;
        this.usersRoleses = usersRoleses;
    }
    public User(String username,String fullname,Set<UsersRoles> usersRoleses, String timecreated, String createdby){
        this.username = username;
        this.fullname = fullname;
        this.usersRoleses = usersRoleses;
        this.timecreated = timecreated;
        this.createdby = createdby;
    }

    @Id
    @GeneratedValue(strategy = IDENTITY)

    @Column(name = "id", unique = true, nullable = false)
    public Integer getId() {
        return this.id;
    }

    public void setId(final Integer id) {
        this.id = id;
    }

    @Column(name = "username", unique = true, length = 45)
    public String getUsername() {
        return this.username;
    }

    public void setUsername(final String username) {
        this.username = username;
    }

    @Column(name = "fullname", unique = true, length = 255)
    public  String getFullname(){return this.fullname;}

    public void setFullname(final String fullname){this.fullname = fullname;}

    @Column(name = "password")
    public String getPassword() {
        return this.password;
    }

    public void setPassword(final String password) {
        this.password = password;
    }

    @Column(name = "timecreated")
    public String getTimecreated() {
        return this.timecreated;
    }

    public void setTimecreated(final String timecreated) {
        this.timecreated = timecreated;
    }

    @Column(name = "createdby")
    public void setCreatedby(String createdby) {
        this.createdby = createdby;
    }

    public String getCreatedby() {
        return this.createdby;
    }


    @Column(name = "enabled", nullable = false, columnDefinition = "TINYINT(1)")
    public Boolean getEnabled() {
        return this.enabled;
    }

    public void setEnabled(final Boolean enabled) {
        this.enabled = enabled;
    }

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "users")
    public Set<UsersRoles> getUsersRoleses() {
        return this.usersRoleses;
    }

    public void setUsersRoleses(final Set<UsersRoles> usersRoleses) {
        this.usersRoleses = usersRoleses;
    }

    @Transient
    public List<GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        for (UsersRoles usersRoles: this.usersRoleses) {
            authorities.add(new SimpleGrantedAuthority(usersRoles.getRole().getName()));
        }
        return authorities;
    }

}
